import { Router } from "express";
import {
  createSessionController,
  deleteSessionByIdController,
  getSessionByIdController,
  getSessionsController,
  updateSessionByIdController,
} from "../controllers/sessionController";

const sessionRouter = Router();

sessionRouter.get("/", getSessionsController);
sessionRouter.get("/:id", getSessionByIdController);
sessionRouter.post("/", createSessionController);
sessionRouter.patch("/:id", updateSessionByIdController);
sessionRouter.delete("/:id", deleteSessionByIdController);

export default sessionRouter;
