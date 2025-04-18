import { Request, Response } from "express";
import {
  deletePostByIdService,
  getPostByIdService,
  getPostsService,
  updatePostByIdService,
  createPostService,
} from "../services/postService";
import { RequestPostType } from "../types/postType";

export const getPostsController = async (
  request: Request,
  response: Response
) => {
  const posts = await getPostsService();

  response.status(posts.statusCode).send(posts);
};

export const getPostByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const post = await getPostByIdService(id);

  response.status(post.statusCode).send(post);
};

export const createPostController = async (
  request: Request,
  response: Response
) => {
  const data = request.body as RequestPostType;
  const post = await createPostService(data);

  response.status(post.statusCode).send(post);
};

export const updatePostByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const data = request.body as RequestPostType;
  const post = await updatePostByIdService(id, data);

  response.status(post.statusCode).send(post);
};

export const deletePostByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const post = await deletePostByIdService(id);

  response.status(post.statusCode).send(post);
};
