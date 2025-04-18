import { Router } from "express";
import {
  createLikeController,
  deleteLikeByIdController,
  getLikeByIdController,
  getLikesController,
  updateLikeByIdController,
} from "../controllers/likeController";

const likeRouter = Router();

likeRouter.get("/", getLikesController);
likeRouter.get("/:id", getLikeByIdController);
likeRouter.post("/", createLikeController);
likeRouter.patch("/:id", updateLikeByIdController);
likeRouter.delete("/:id", deleteLikeByIdController);

export default likeRouter;
