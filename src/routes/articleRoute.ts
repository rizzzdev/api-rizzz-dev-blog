import { Router } from "express";
import {
  deleteArticleByIdController,
  getArticleByIdController,
  getArticlesController,
  updateArticleByIdController,
  createArticleController,
} from "../controllers/articleController";

const articleRouter = Router();

articleRouter.get("/", getArticlesController);
articleRouter.get("/:id", getArticleByIdController);
articleRouter.post("/", createArticleController);
articleRouter.patch("/:id", updateArticleByIdController);
articleRouter.delete("/:id", deleteArticleByIdController);

export default articleRouter;
