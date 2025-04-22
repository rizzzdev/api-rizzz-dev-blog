import { Router } from "express";
import {
  createPageviewController,
  deletePageviewByIdController,
  getPageviewByIdController,
  getPageviewsController,
  updatePageviewByIdController,
} from "../controllers/pageviewController";

const pageviewRouter = Router();

pageviewRouter.get("/", getPageviewsController);
pageviewRouter.get("/:id", getPageviewByIdController);
pageviewRouter.post("/", createPageviewController);
pageviewRouter.patch("/:id", updatePageviewByIdController);
pageviewRouter.delete("/:id", deletePageviewByIdController);

export default pageviewRouter;
