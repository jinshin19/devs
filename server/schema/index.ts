import { mysqlTable, varchar, text, int } from "drizzle-orm/mysql-core";

export const devs = mysqlTable("devs", {
  id: varchar("id", { length: 256 }).primaryKey(),
  username: text("name"),
  firstname: text("name"),
  middlename: text("name"),
  lastname: text("name"),
  stacks: text("name"),
  links: text("name"),
  password: text("name"),
  confirm_password: text("name"),
});
