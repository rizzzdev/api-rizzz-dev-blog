import { Router } from "express";
import { getCookieController } from "../controllers/cookieController";

const cookieRouter = Router();

cookieRouter.get("/", getCookieController);

export default cookieRouter;
