import { Request, Response } from "express";
import {
  deleteCategoryByIdService,
  getCategoriesService,
  getCategoryByIdService,
  updateCategoryByIdService,
  createCategoryService,
} from "../services/categoryService";
import { RequestCategoryType } from "../types/categoryType";

export const getCategoriesController = async (
  request: Request,
  response: Response
) => {
  const categories = await getCategoriesService();

  response.status(categories.statusCode).send(categories);
};

export const getCategoryByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const category = await getCategoryByIdService(id);

  response.status(category.statusCode).send(category);
};

export const createCategoryController = async (
  request: Request,
  response: Response
) => {
  const data = request.body as RequestCategoryType;
  const category = await createCategoryService(data);

  response.status(category.statusCode).send(category);
};

export const updateCategoryByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const data = request.body as RequestCategoryType;
  const category = await updateCategoryByIdService(id, data);

  response.status(category.statusCode).send(category);
};

export const deleteCategoryByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const category = await deleteCategoryByIdService(id);

  response.status(category.statusCode).send(category);
};
