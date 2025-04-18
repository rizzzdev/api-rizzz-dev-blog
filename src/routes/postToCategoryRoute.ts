import { Router } from "express";
import {
  createPostToCategoryController,
  deletePostToCategoryByIdController,
  getPostToCategoriesController,
  getPostToCategoryByIdController,
  updatePostToCategoryByIdController,
} from "../controllers/postToCategoryController";

const postToCategoryRouter = Router();

postToCategoryRouter.get("/", getPostToCategoriesController);
postToCategoryRouter.get("/:id", getPostToCategoryByIdController);
postToCategoryRouter.post("/", createPostToCategoryController);
postToCategoryRouter.patch("/:id", updatePostToCategoryByIdController);
postToCategoryRouter.delete("/:id", deletePostToCategoryByIdController);

export default postToCategoryRouter;
