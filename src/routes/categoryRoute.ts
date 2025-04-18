import { Router } from "express";
import {
  createCategoryController,
  deleteCategoryByIdController,
  getCategoriesController,
  getCategoryByIdController,
  updateCategoryByIdController,
} from "../controllers/categoryController";

const categoryRouter = Router();

categoryRouter.get("/", getCategoriesController);
categoryRouter.get("/:id", getCategoryByIdController);
categoryRouter.post("/", createCategoryController);
categoryRouter.patch("/:id", updateCategoryByIdController);
categoryRouter.delete("/:id", deleteCategoryByIdController);

export default categoryRouter;
