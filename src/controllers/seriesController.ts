import { Request, Response } from "express";
import {
  createSeriesService,
  deleteSeriesByIdService,
  getSeriesByIdService,
  getSeriesService,
  updateSeriesByIdService,
} from "../services/seriesService";
import { RequestSeriesType } from "../types/seriesType";

export const getSeriesController = async (
  request: Request,
  response: Response
) => {
  const series = await getSeriesService();

  response.status(series.statusCode).send(series);
};

export const getSeriesByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const series = await getSeriesByIdService(id);

  response.status(series.statusCode).send(series);
};

export const createSeriesController = async (
  request: Request,
  response: Response
) => {
  const data = request.body as RequestSeriesType;
  const series = await createSeriesService(data);

  response.status(series.statusCode).send(series);
};

export const updateSeriesByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const data = request.body;
  const series = await updateSeriesByIdService(id, data);

  response.status(series.statusCode).send(series);
};

export const deleteSeriesByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const series = await deleteSeriesByIdService(id);

  response.status(series.statusCode).send(series);
};
