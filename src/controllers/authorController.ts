import { Request, Response } from "express";
import {
  deleteAuthorByIdService,
  getAuthorByIdService,
  getAuthorsService,
  updateAuthorByIdService,
  createAuthorService,
} from "../services/authorService";
import { RequestAuthorType } from "../types/authorType";

export const getAuthorsController = async (
  request: Request,
  response: Response
) => {
  const authors = await getAuthorsService();

  response.status(authors.statusCode).send(authors);
};

export const getAuthorByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const author = await getAuthorByIdService(id);

  response.status(author.statusCode).send(author);
};

export const createAuthorController = async (
  request: Request,
  response: Response
) => {
  const data = request.body as RequestAuthorType;
  const author = await createAuthorService(data);

  response.status(author.statusCode).send(author);
};

export const updateAuthorByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const data = request.body;
  const author = await updateAuthorByIdService(id, data);

  response.status(author.statusCode).send(author);
};

export const deleteAuthorByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const author = await deleteAuthorByIdService(id);

  response.status(author.statusCode).send(author);
};
