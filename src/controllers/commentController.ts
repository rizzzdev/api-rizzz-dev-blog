import { Request, Response } from "express";
import {
  createCommentService,
  deleteCommentByIdService,
  getCommentByIdService,
  getCommentsService,
  updateCommentByIdService,
} from "../services/commentService";
import { RequestCommentType } from "../types/commentType";

export const getCommentsController = async (
  request: Request,
  response: Response
) => {
  const comments = await getCommentsService();

  response.status(comments.statusCode).send(comments);
};

export const getCommentByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const comment = await getCommentByIdService(id);

  response.status(comment.statusCode).send(comment);
};

export const createCommentController = async (
  request: Request,
  response: Response
) => {
  const data = request.body as RequestCommentType;
  const comment = await createCommentService(data);

  response.status(comment.statusCode).send(comment);
};

export const updateCommentByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const data = request.body;
  const comment = await updateCommentByIdService(id, data);

  response.status(comment.statusCode).send(comment);
};

export const deleteCommentByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const comment = await deleteCommentByIdService(id);

  response.status(comment.statusCode).send(comment);
};
