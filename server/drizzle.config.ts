import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./schema/index.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    host: "localhost",
    user: "root",
    password: "localhost123@",
    database: "devs",
  },
  verbose: true,
  strict: true,
});
