import { Router } from "express";
import {
  createTopicController,
  deleteTopicByIdController,
  getTopicsController,
  getTopicByIdController,
  updateTopicByIdController,
} from "../controllers/topicController";

const topicRouter = Router();

topicRouter.get("/", getTopicsController);
topicRouter.get("/:id", getTopicByIdController);
topicRouter.post("/", createTopicController);
topicRouter.patch("/:id", updateTopicByIdController);
topicRouter.delete("/:id", deleteTopicByIdController);

export default topicRouter;
