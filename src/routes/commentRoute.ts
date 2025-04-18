import { Router } from "express";
import {
  createCommentController,
  deleteCommentByIdController,
  getCommentByIdController,
  getCommentsController,
  updateCommentByIdController,
} from "../controllers/commentController";

const commentRouter = Router();

commentRouter.get("/", getCommentsController);
commentRouter.get("/:id", getCommentByIdController);
commentRouter.post("/", createCommentController);
commentRouter.patch("/:id", updateCommentByIdController);
commentRouter.delete("/:id", deleteCommentByIdController);

export default commentRouter;
