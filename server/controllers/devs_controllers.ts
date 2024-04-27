import { Request, Response } from "express";
import { hashPassword, compareHashedPassword } from "../utils/password_helper";
import { ulid } from "ulid";
import { db } from "../database/database";
import { devs } from "../schema";
import { eq, like, or } from "drizzle-orm";
import {
  Dev,
  DevCredential,
  Devs,
  DevUsername,
  Me,
  NewDev,
} from "../types/types";
import jwt from "jsonwebtoken";
import {
  TDevSchema,
  DevSchema,
  TLoginSchema,
  LoginSchema,
  TupdateDevSchema,
  updateDevSchema,
} from "../types/schema";

export const isVerified = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const { token }: { token: string } = await request.body;
  if (!token)
    return response.status(401).send({ message: "Authorized", ok: false });
  const isVerified: any = jwt.verify(
    token,
    process.env.ACCESS_SECRET!,
    (err, decoded) => {
      if (err) return false;
      return true;
    }
  );
  if (!isVerified)
    return response.status(401).send({ message: "Unauthorized", ok: false });
  return response.status(200).send({ message: "Authorized", ok: true });
};

export const getAllDevs = async (request: Request, response: Response) => {
  try {
    const data: Devs[] = await db.query.devs.findMany({
      columns: {
        id: true,
        firstname: true,
        middlename: true,
        lastname: true,
      },
    });
    return response.status(200).send({
      message: "Fetched Successfully",
      data,
      ok: true,
    });
  } catch (error) {
    console.log("Error Fetch All Data:", error);
    return response.status(400).send({
      message: "Failed to fetched data",
      ok: false,
    });
  }
};

export const getDevByID = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    const data: Dev | undefined = await db.query.devs.findFirst({
      columns: {
        id: true,
        username: true,
        firstname: true,
        middlename: true,
        lastname: true,
        bio: true,
        stacks: true,
        links: true,
      },
      where: eq(devs.id, id),
    });
    return response.status(200).send({
      data,
    });
  } catch (error) {
    return response.status(400).send({
      error: error,
    });
  }
};

export const searchDev = async (request: Request, response: Response) => {
  try {
    const { search }: string = await request.body;
    const searchResult = await db.query.devs.findMany({
      columns: { id: true, firstname: true, middlename: true, lastname: true },
      where: or(
        like(devs.username, `%${search}%`),
        like(devs.firstname, `%${search}%`),
        like(devs.middlename, `%${search}%`),
        like(devs.lastname, `%${search}%`)
      ),
    });
    return response.status(200).send({
      data: searchResult,
    });
  } catch (error) {
    return response.status(400).send({
      error: error,
    });
  }
};

export const createDev = async (request: Request, response: Response) => {
  const id = ulid();
  const {
    username,
    firstname,
    lastname,
    password: UserPassword,
  }: TDevSchema = await request.body;
  try {
    const isUsernameExist = await db.query.devs.findFirst({
      columns: { username: true, password: true },
      where: eq(devs.username, username),
    });
    if (isUsernameExist)
      return response
        .status(409)
        .send({ message: "Username is already taken", ok: false });
    const password = hashPassword(UserPassword);
    const devValues = DevSchema.parse({
      ...request.body,
      firstname: firstname.toLowerCase()!,
      lastname: lastname?.toLowerCase(),
      password,
    });
    await db.insert(devs).values({ id, ...devValues });
    return response
      .status(201)
      .send({ message: "Signed Up Successfully", ok: true });
  } catch (error) {
    console.log("Error creating", error);
    return response
      .status(400)
      .send({ message: "Failed to sign up", ok: false });
  }
};

export const loginDev = async (request: Request, response: Response) => {
  const { username, password }: TLoginSchema = await request.body;
  try {
    const parsedValue = LoginSchema.parse({ username, password });
    const isUserExist: TLoginSchema & {
      id?: string;
    } = (await db.query.devs.findFirst({
      columns: { id: true, username: true, password: true },
      where: eq(devs.username, parsedValue?.username),
    })) as TLoginSchema;
    if (!isUserExist)
      return response.status(404).send({ message: "error", ok: false });
    const isPasswordMatched = compareHashedPassword(
      password,
      isUserExist?.password
    );
    console.log(isPasswordMatched);
    if (!isPasswordMatched)
      return response.status(404).send({ message: "error", ok: false });
    const accessToken = jwt.sign(
      {
        id: isUserExist?.id,
        username: isUserExist?.username,
      },
      process.env.ACCESS_SECRET ?? "test",
      { expiresIn: "15m" }
    );
    const refreshToken = jwt.sign(
      {
        // note to myself: This refresh token should be set in here to be a http only in cookie
        id: isUserExist?.id,
      },
      process.env.ACCESS_SECRET ?? "test",
      { expiresIn: "1d" }
    );
    return response.status(200).send({
      message: "Logged in successfully",
      accessToken,
      data: { id: isUserExist?.id },
    });
  } catch (error) {
    console.log("Error Logging in", error);
    return response
      .status(400)
      .send({ message: "Failed to sign up", ok: false });
  }
};

export const updateDevByID = async (request: Request, response: Response) => {
  /**
   * Note to myself:
   * 1) Improve the change password, make a other page for it maybe.
   * 2) Leave the links like that or make a seperate table for links and use relations, then use transaction to insert both update and links
   * 3) if id is not present return 401 status that says unauthorized or forbidden 403 or make a middleware here before to update, validate if user is authenticated etc
   * */
  const {
    id,
    username,
    firstname,
    middlename,
    lastname,
    bio,
    stacks,
    links: UserLinks,
  }: TupdateDevSchema = request.body;
  const links = JSON.stringify(UserLinks);
  const parsedValue = updateDevSchema.parse({
    id,
    username: username?.toLowerCase(),
    firstname: firstname?.toLowerCase(),
    middlename: middlename?.toLowerCase(),
    lastname: lastname?.toLowerCase(),
    bio: bio?.toLowerCase(),
    stacks: stacks?.toLowerCase(),
    links,
  });
  try {
    await db
      .update(devs)
      .set({ ...parsedValue, links })
      .where(eq(devs.id, id));
    return response.status(200).send({
      message: "Updated Successfully",
      ok: true,
    });
  } catch (error) {
    console.log("Error Update:", error);
    return response.status(400).send({
      error: error,
      ok: false,
    });
  }
};

export const deleteDevByID = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    await db.delete(devs).where(eq(devs.id, id));
    return response
      .status(200)
      .send({ message: "Deleted successfully", ok: true });
  } catch (error) {
    console.log("Error Delete:", error);
    return response
      .status(400)
      .send({ message: "Failed to delete", ok: false });
  }
};
