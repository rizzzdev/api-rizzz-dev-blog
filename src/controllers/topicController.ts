import { Request, Response } from "express";
import {
  deleteTopicByIdService,
  getTopicsService,
  getTopicByIdService,
  updateTopicByIdService,
  createTopicService,
} from "../services/topicService";
import { RequestTopicType } from "../types/topicType";

export const getTopicsController = async (
  request: Request,
  response: Response
) => {
  const topics = await getTopicsService();

  response.status(topics.statusCode).send(topics);
};

export const getTopicByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const topic = await getTopicByIdService(id);

  response.status(topic.statusCode).send(topic);
};

export const createTopicController = async (
  request: Request,
  response: Response
) => {
  const data = request.body as RequestTopicType;
  const topic = await createTopicService(data);

  response.status(topic.statusCode).send(topic);
};

export const updateTopicByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const data = request.body as RequestTopicType;
  const topic = await updateTopicByIdService(id, data);

  response.status(topic.statusCode).send(topic);
};

export const deleteTopicByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const topic = await deleteTopicByIdService(id);

  response.status(topic.statusCode).send(topic);
};
