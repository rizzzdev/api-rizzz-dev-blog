import { Router } from "express";
import {
  createReactionController,
  deleteReactionByIdController,
  getReactionByIdController,
  getReactionsController,
  updateReactionByIdController,
} from "../controllers/reactionController";

const reactionRouter = Router();

reactionRouter.get("/", getReactionsController);
reactionRouter.get("/:id", getReactionByIdController);
reactionRouter.post("/", createReactionController);
reactionRouter.patch("/:id", updateReactionByIdController);
reactionRouter.delete("/:id", deleteReactionByIdController);

export default reactionRouter;
