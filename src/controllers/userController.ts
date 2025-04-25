import { Request, Response } from "express";
import {
  createUserService,
  deleteUserByIdService,
  getUserByIdService,
  getUsersService,
  updateUserByIdService,
} from "../services/userService";
import { RequestUserType } from "../types/userType";

export const getUsersController = async (
  request: Request,
  response: Response
) => {
  const users = await getUsersService();

  response.status(users.statusCode).send(users);
};

export const getUserByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const user = await getUserByIdService(id);

  response.status(user.statusCode).send(user);
};

export const createUserController = async (
  request: Request,
  response: Response
) => {
  const data = request.body as RequestUserType;
  const user = await createUserService(data);

  response
    .cookie("userId", user.data?.id, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    })
    .status(user.statusCode)
    .send(user);
};

export const updateUserByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const data = request.body;
  const user = await updateUserByIdService(id, data);

  response.status(user.statusCode).send(user);
};

export const deleteUserByIdController = async (
  request: Request,
  response: Response
) => {
  const id = request.params["id"];
  const user = await deleteUserByIdService(id);

  response.status(user.statusCode).send(user);
};
