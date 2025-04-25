import { Request, Response } from "express";
import {
  deleteArticleByIdService,
  getArticleByIdService,
  getArticlesService,
  updateArticleByIdService,
  createArticleService,
  getArticlesBySearchService,
} from "../services/articleService";
import { RequestArticleType } from "../types/articleType";

export const getArticlesController = async (
  request: Request,
  response: Response
) => {
  const search = request.query.search as string;
  if (search) {
    const articles = await getArticlesBySearchService(search);
    response.status(articles.statusCode).send(articles);
    return;
  }

  const articles = await getArticlesService();
  response.status(articles.statusCode).send(articles);
};

export const getArticleByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const article = await getArticleByIdService(id);

  response.status(article.statusCode).send(article);
};

export const createArticleController = async (
  request: Request,
  response: Response
) => {
  const data = request.body as RequestArticleType;
  const article = await createArticleService(data);

  response.status(article.statusCode).send(article);
};

export const updateArticleByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const data = request.body as RequestArticleType;
  const article = await updateArticleByIdService(id, data);

  response.status(article.statusCode).send(article);
};

export const deleteArticleByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const article = await deleteArticleByIdService(id);

  response.status(article.statusCode).send(article);
};
