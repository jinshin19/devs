import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { devs } from "../schema/index";

export type Me = InferSelectModel<typeof devs>;

export type Devs = Pick<
  InferSelectModel<typeof devs>,
  "id" | "firstname" | "middlename" | "lastname"
>;

export type Dev = Pick<
  InferSelectModel<typeof devs>,
  | "id"
  | "username"
  | "firstname"
  | "middlename"
  | "lastname"
  | "bio"
  | "stacks"
  | "links"
>;

export type DevUsername = Pick<Dev, "username">;

export type DevCredential = Pick<
  InferSelectModel<typeof devs>,
  "id" | "username" | "password"
>;

export type LoginDev = Pick<DevUsername, "username"> & {
  password: string | null | undefined;
};

export type NewDev = Pick<
  InferInsertModel<typeof devs>,
  "username" | "firstname" | "password"
> & { confirm_password: string | null };
