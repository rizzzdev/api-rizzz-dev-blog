import { Request, Response } from "express";
import {
  createLikeService,
  deleteLikeByIdService,
  getLikeByIdService,
  getLikesService,
  updateLikeByIdService,
} from "../services/likeService";
import { RequestLikeType } from "../types/likeType";

export const getLikesController = async (
  request: Request,
  response: Response
) => {
  const likes = await getLikesService();

  response.status(likes.statusCode).send(likes);
};

export const getLikeByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const like = await getLikeByIdService(id);

  response.status(like.statusCode).send(like);
};

export const createLikeController = async (
  request: Request,
  response: Response
) => {
  const data = request.body as RequestLikeType;
  const like = await createLikeService(data);

  response.status(like.statusCode).send(like);
};

export const updateLikeByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const data = request.body;
  const like = await updateLikeByIdService(id, data);

  response.status(like.statusCode).send(like);
};

export const deleteLikeByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const like = await deleteLikeByIdService(id);

  response.status(like.statusCode).send(like);
};
