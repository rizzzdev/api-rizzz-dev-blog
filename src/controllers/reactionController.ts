import { Request, Response } from "express";
import {
  createReactionService,
  deleteReactionByIdService,
  getReactionByIdService,
  getReactionsService,
  updateReactionByIdService,
} from "../services/reactionService";
import { RequestReactionType } from "../types/reactionType";

export const getReactionsController = async (
  request: Request,
  response: Response
) => {
  const reactions = await getReactionsService();

  response.status(reactions.statusCode).send(reactions);
};

export const getReactionByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const reaction = await getReactionByIdService(id);

  response.status(reaction.statusCode).send(reaction);
};

export const createReactionController = async (
  request: Request,
  response: Response
) => {
  const data = request.body as RequestReactionType;
  const reaction = await createReactionService(data);

  response.status(reaction.statusCode).send(reaction);
};

export const updateReactionByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const data = request.body;
  const reaction = await updateReactionByIdService(id, data);

  response.status(reaction.statusCode).send(reaction);
};

export const deleteReactionByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const reaction = await deleteReactionByIdService(id);

  response.status(reaction.statusCode).send(reaction);
};
