import { Request, Response } from "express";
import {
  createSessionService,
  deleteSessionByIdService,
  getSessionByIdService,
  getSessionsService,
  updateSessionByIdService,
} from "../services/sessionService";
import { RequestSessionType } from "../types/sessionType";
import { getAuthorByAuthorIdRepo } from "../repos/authorRepo";

export const getSessionsController = async (
  request: Request,
  response: Response
) => {
  const sessions = await getSessionsService();

  response.status(sessions.statusCode).send(sessions);
};

export const getSessionByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const session = await getSessionByIdService(id);

  response.status(session.statusCode).send(session);
};

export const createSessionController = async (
  request: Request,
  response: Response
) => {
  const data = request.body as RequestSessionType;
  const session = await createSessionService(data);
  const author = await getAuthorByAuthorIdRepo(session!.data!.authorId);

  response
    .cookie("authorId", author?.id, { httpOnly: true })
    .status(session.statusCode)
    .send(session);
};

export const updateSessionByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const data = request.body;
  const session = await updateSessionByIdService(id, data);

  response.status(session.statusCode).send(session);
};

export const deleteSessionByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const session = await deleteSessionByIdService(id);

  response
    .cookie("authorId", "", { httpOnly: true })
    .status(session.statusCode)
    .send(session);
};
