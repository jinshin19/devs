import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "../schema/index";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
const pool = mysql.createPool({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
});

export const db = drizzle(pool, { schema, mode: "default" });
