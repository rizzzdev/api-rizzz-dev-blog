import { Request, Response } from "express";
import {
  createPostToCategoryService,
  deletePostToCategoryByIdService,
  getPostToCategoriesService,
  getPostToCategoryByIdService,
  updatePostToCategoryByIdService,
} from "../services/postToCategoryService";
import { RequestPostToCategoryType } from "../types/postToCategoryType";

export const getPostToCategoriesController = async (
  request: Request,
  response: Response
) => {
  const postToCategories = await getPostToCategoriesService();

  response.status(postToCategories.statusCode).send(postToCategories);
};

export const getPostToCategoryByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const postToCategory = await getPostToCategoryByIdService(id);

  response.status(postToCategory.statusCode).send(postToCategory);
};

export const createPostToCategoryController = async (
  request: Request,
  response: Response
) => {
  const data = request.body as RequestPostToCategoryType;
  const postToCategory = await createPostToCategoryService(data);

  response.status(postToCategory.statusCode).send(postToCategory);
};

export const updatePostToCategoryByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const data = request.body;
  const postToCategory = await updatePostToCategoryByIdService(id, data);

  response.status(postToCategory.statusCode).send(postToCategory);
};

export const deletePostToCategoryByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const postToCategory = await deletePostToCategoryByIdService(id);

  response.status(postToCategory.statusCode).send(postToCategory);
};
