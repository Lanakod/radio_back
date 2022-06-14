import Session from "@models/session.model";
import path from "path";
import { Sequelize } from "sequelize-typescript";
import { Dialect } from "sequelize/types";

export const sequelize = new Sequelize({
  dialect: process.env.SQ_TYPE as Dialect, // База данных: mysql, postgres
  host: process.env.SQ_HOST as string,
  port: Number(process.env.SQ_PORT),
  database: process.env.SQ_DB as string,
  username: process.env.SQ_USER as string,
  password: process.env.SQ_PASSWORD as string,
  models: [path.resolve("src", "common", "database", "models", "**", "*.model.ts")],
});
