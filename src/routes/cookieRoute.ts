import { Router } from "express";
import {
  getCookieController,
  postCookieController,
} from "../controllers/cookieController";

const cookieRouter = Router();

cookieRouter.get("/", getCookieController);
cookieRouter.post("/", postCookieController);

export default cookieRouter;
