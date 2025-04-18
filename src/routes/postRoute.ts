import { Router } from "express";
import {
  deletePostByIdController,
  getPostByIdController,
  getPostsController,
  updatePostByIdController,
  createPostController,
} from "../controllers/postController";

const postRouter = Router();

postRouter.get("/", getPostsController);
postRouter.get("/:id", getPostByIdController);
postRouter.post("/", createPostController);
postRouter.patch("/:id", updatePostByIdController);
postRouter.delete("/:id", deletePostByIdController);

export default postRouter;
