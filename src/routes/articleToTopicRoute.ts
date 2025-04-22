import { Router } from "express";
import {
  createArticleToTopicController,
  deleteArticleToTopicByIdController,
  getArticleToTopicsController,
  getArticleToTopicByIdController,
  updateArticleToTopicByIdController,
} from "../controllers/articleToTopicController";

const articleToTopicRouter = Router();

articleToTopicRouter.get("/", getArticleToTopicsController);
articleToTopicRouter.get("/:id", getArticleToTopicByIdController);
articleToTopicRouter.post("/", createArticleToTopicController);
articleToTopicRouter.patch("/:id", updateArticleToTopicByIdController);
articleToTopicRouter.delete("/:id", deleteArticleToTopicByIdController);

export default articleToTopicRouter;
