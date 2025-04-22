import { Request, Response } from "express";
import {
  createPageviewService,
  deletePageviewByIdService,
  getPageviewByIdService,
  getPageviewsService,
  updatePageviewByIdService,
} from "../services/pageviewService";
import { RequestPageviewType } from "../types/pageviewType";

export const getPageviewsController = async (
  request: Request,
  response: Response
) => {
  const pageviews = await getPageviewsService();

  response.status(pageviews.statusCode).send(pageviews);
};

export const getPageviewByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const pageview = await getPageviewByIdService(id);

  response.status(pageview.statusCode).send(pageview);
};

export const createPageviewController = async (
  request: Request,
  response: Response
) => {
  const data = request.body as RequestPageviewType;
  const pageview = await createPageviewService(data);

  response.status(pageview.statusCode).send(pageview);
};

export const updatePageviewByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const data = request.body as RequestPageviewType;
  const pageview = await updatePageviewByIdService(id, data);

  response.status(pageview.statusCode).send(pageview);
};

export const deletePageviewByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const pageview = await deletePageviewByIdService(id);

  response.status(pageview.statusCode).send(pageview);
};
