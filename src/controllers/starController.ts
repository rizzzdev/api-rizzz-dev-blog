import { Request, Response } from "express";
import {
  createStarService,
  deleteStarByIdService,
  getStarByIdService,
  getStarsService,
  updateStarByIdService,
} from "../services/starService";
import { RequestStarType } from "../types/starType";

export const getStarsController = async (
  request: Request,
  response: Response
) => {
  const stars = await getStarsService();

  response.status(stars.statusCode).send(stars);
};

export const getStarByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const star = await getStarByIdService(id);

  response.status(star.statusCode).send(star);
};

export const createStarController = async (
  request: Request,
  response: Response
) => {
  const data = request.body as RequestStarType;
  const star = await createStarService(data);

  response.status(star.statusCode).send(star);
};

export const updateStarByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const data = request.body;
  const star = await updateStarByIdService(id, data);

  response.status(star.statusCode).send(star);
};

export const deleteStarByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const star = await deleteStarByIdService(id);

  response.status(star.statusCode).send(star);
};
