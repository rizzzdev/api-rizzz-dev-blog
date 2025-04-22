import express, { Application } from "express";
import { PrismaClient } from "./prisma";
import { routes } from "../routes";
import cookieParser from "cookie-parser";
import cors from "cors";
import { env } from "../config/env";

export const prisma = new PrismaClient();

const server = () => {
  const app: Application = express();
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(cookieParser());
  app.use(
    cors({
      credentials: true,
      origin: [env.clientUrl!],
      methods: ["GET", "POST", "PATCH", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );
  routes(app);

  return app;
};

export default server;
