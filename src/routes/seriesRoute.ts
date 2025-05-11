import { Router } from "express";
import {
  createSeriesController,
  deleteSeriesByIdController,
  getSeriesByIdController,
  getSeriesController,
  updateSeriesByIdController,
} from "../controllers/seriesController";

const seriesRouter = Router();

seriesRouter.get("/", getSeriesController);
seriesRouter.get("/:id", getSeriesByIdController);
seriesRouter.post("/", createSeriesController);
seriesRouter.patch("/:id", updateSeriesByIdController);
seriesRouter.delete("/:id", deleteSeriesByIdController);

export default seriesRouter;
