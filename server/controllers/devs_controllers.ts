import { Request, Response } from "express";
import { hashPassword, compareHashedPassword } from "../utils/password_helper";
import { ulid } from "ulid";
import { db } from "../database/database";
import { devs, hobbies } from "../schema";
import { eq } from "drizzle-orm";
import {
  Dev,
  DevCredential,
  Devs,
  DevUsername,
  Me,
  NewDev,
} from "../types/types";

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

export const createDev = async (request: Request, response: Response) => {
  const id = ulid();
  const {
    username,
    firstname,
    password: UserPassword,
    confirm_password,
  }: NewDev = request.body;
  // Note to myself: I think I need to improve this, Instead of doing the validatiom here, why not in the frontend instead.
  if (!username && !firstname && !UserPassword && !confirm_password)
    return response.status(400).send({ message: "Fields are required" });
  if (!username)
    return response.status(400).send({ message: "Username is required" });
  const isUsernameExist: DevUsername | undefined =
    await db.query.devs.findFirst({
      columns: { username: true },
      where: eq(devs.username, username),
    });
  if (isUsernameExist)
    return response
      .status(409)
      .send({ message: "Username is already taken", ok: false });
  if (!firstname)
    return response.status(400).send({ message: "Firstname is required" });
  if (!UserPassword)
    return response.status(400).send({ message: "Password is required" });
  if (UserPassword !== confirm_password)
    return response.status(400).send({ message: "Password not match" });
  const password = hashPassword(UserPassword);

  try {
    await db.insert(devs).values({ id, ...request.body, password });
    return response.status(200).send({
      message: "Signed up Successfully",
      ok: true,
    });
  } catch (error) {
    console.log("Error Signup:", error);
    return response.status(400).send({
      message: "Failed to signup",
      ok: false,
    });
  }
};

export const loginDev = async (request: Request, response: Response) => {
  const { username, password }: DevCredential = await request.body;
  const result: DevCredential | undefined = await db.query.devs.findFirst({
    columns: { username: true, password: true },
    where: eq(devs.username, username!),
  });
  if (!result)
    return response.status(404).send({ message: "Wrong username or password" });
  const isMatched = compareHashedPassword(password!, result?.password!);
  if (!isMatched)
    return response.status(404).send({ message: "Wrong username or password" });
  // note to myself: improve this, return a json here or do middleware
  return response.status(200).send({ message: "Logged in successfully" });
};

export const updateDevByID = async (request: Request, response: Response) => {
  const { id } = request.params;
  const {
    username,
    firstname,
    middlename,
    lastname,
    bio,
    stacks,
    links,
    password,
  }: Me = request.body;
  // Note to myself: Improve the change password, make a other page for it maybe.
  if (
    !username &&
    !firstname &&
    !middlename &&
    !lastname &&
    !bio &&
    !stacks &&
    !links &&
    !password
  )
    return response.status(400).send({
      message: "Fields are required",
    });
  try {
    await db
      .update(devs)
      .set({ ...request.body })
      .where(eq(devs.id, id));
    return response.status(200).send({
      message: "Updated Successfully",
    });
  } catch (error) {
    return response.status(400).send({
      error: error,
    });
  }
};

export const deleteDevByID = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    await db.delete(devs).where(eq(devs.id, id));
    return response.status(200).send({ message: "Deleted successfully" });
  } catch (error) {
    return response.status(400).send({ message: "Failed to delete" });
  }
};
