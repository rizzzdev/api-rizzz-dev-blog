import { Router } from "express";
import {
  createStarController,
  deleteStarByIdController,
  getStarByIdController,
  getStarsController,
  updateStarByIdController,
} from "../controllers/starController";

const starRouter = Router();

starRouter.get("/", getStarsController);
starRouter.get("/:id", getStarByIdController);
starRouter.post("/", createStarController);
starRouter.patch("/:id", updateStarByIdController);
starRouter.delete("/:id", deleteStarByIdController);

export default starRouter;
