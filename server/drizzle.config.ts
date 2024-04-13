import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./schema/index.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    host: "",
    user: "",
    password: "",
    database: "",
  },
  verbose: true,
  strict: true,
});
