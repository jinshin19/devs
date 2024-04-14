import { Request, Response } from "express";
import { hashPassword, compareHashedPassword } from "../utils/password_helper";
import { ulid } from "ulid";
import { db } from "../database/database";
import { devs } from "../schema";
import { eq } from "drizzle-orm";
import {
  AddORUpdateDevDataTypes,
  GetAllDevDataTypes,
  GetDevDataTypes,
} from "../types/types";

export const getAllDevs = async (request: Request, response: Response) => {
  try {
    const data: GetAllDevDataTypes[] = await db
      .select({
        id: devs.id,
        firstname: devs.firstname,
        middlename: devs.middlename,
        lastname: devs.lastname,
      })
      .from(devs);
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
    const data: GetDevDataTypes[] = await db
      .select({
        id: devs.id,
        username: devs.username,
        firstname: devs.firstname,
        middlename: devs.middlename,
        lastname: devs.lastname,
        bio: devs.bio,
        stacks: devs.stacks,
        links: devs.links,
      })
      .from(devs)
      .where(eq(devs.id, id));
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
    lastname,
    password: UserPassword,
    confirm_password,
  }: AddORUpdateDevDataTypes = request.body;
  // Note to myself: I think I need to improve this, Instead of doing the validatiom here, why not in the frontend instead.
  if (!username && !firstname && !UserPassword && !confirm_password)
    return response.status(400).send({ message: "Fields are required" });
  if (!username)
    return response.status(400).send({ message: "Username is required" });
  const isUsernameExist: { username: string | null }[] = await db
    .select({
      username: devs.username,
    })
    .from(devs)
    .where(eq(devs.username, username));
  if (isUsernameExist.length)
    return response
      .status(409)
      .send({ message: "Username is already taken", ok: false });
  if (!firstname)
    return response.status(400).send({ message: "Firstname is required" });
  if (!lastname)
    return response.status(400).send({ message: "Lastname is required" });
  if (!UserPassword)
    return response.status(400).send({ message: "Password is required" });
  if (UserPassword !== confirm_password)
    return response.status(400).send({ message: "Password not match" });
  const password = hashPassword(UserPassword);

  try {
    await db.insert(devs).values({ id, ...request.body, password });
    return response.status(200).send({
      message: "Signup Successfully",
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
  }: AddORUpdateDevDataTypes = request.body;
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
