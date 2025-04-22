import { Request, Response } from "express";
import {
  createArticleToTopicService,
  deleteArticleToTopicByIdService,
  getArticleToTopicsService,
  getArticleToTopicByIdService,
  updateArticleToTopicByIdService,
} from "../services/articleToTopicService";
import { RequestArticleToTopicType } from "../types/articleToTopicType";

export const getArticleToTopicsController = async (
  request: Request,
  response: Response
) => {
  const articleToTopics = await getArticleToTopicsService();

  response.status(articleToTopics.statusCode).send(articleToTopics);
};

export const getArticleToTopicByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const articleToTopic = await getArticleToTopicByIdService(id);

  response.status(articleToTopic.statusCode).send(articleToTopic);
};

export const createArticleToTopicController = async (
  request: Request,
  response: Response
) => {
  const data = request.body as RequestArticleToTopicType;
  const articleToTopic = await createArticleToTopicService(data);

  response.status(articleToTopic.statusCode).send(articleToTopic);
};

export const updateArticleToTopicByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const data = request.body;
  const articleToTopic = await updateArticleToTopicByIdService(id, data);

  response.status(articleToTopic.statusCode).send(articleToTopic);
};

export const deleteArticleToTopicByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const articleToTopic = await deleteArticleToTopicByIdService(id);

  response.status(articleToTopic.statusCode).send(articleToTopic);
};
