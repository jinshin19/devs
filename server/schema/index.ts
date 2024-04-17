import { mysqlTable, varchar, text, int } from "drizzle-orm/mysql-core";

export const devs = mysqlTable("devs", {
  id: varchar("id", { length: 256 }).primaryKey(),
  username: text("username"),
  firstname: text("firstname"),
  middlename: text("middlename"),
  lastname: text("lastname"),
  bio: text("bio"),
  stacks: text("stacks"),
  links: varchar("links", { length: 256 }),
  password: varchar("password", { length: 256 }),
});
