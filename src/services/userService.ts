import { apiResponse } from "../libs/apiResponse";
import { fullNameParser } from "../libs/fullNameParser";
import {
  createUserRepo,
  deleteUserByIdRepo,
  getUserByFullName,
  getUserByIdRepo,
  getUsersRepo,
  updateUserByIdRepo,
} from "../repos/userRepo";
import { StatusCode } from "../types/apiResponseType";
import { RequestUserType } from "../types/userType";
import { requestUserValidation } from "../validations/userValidation";

export const getUsersService = async () => {
  const users = await getUsersRepo();

  if (!users[0]) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Users Not Found!", users);
  }

  return apiResponse(false, StatusCode.OK, "Get Users Successfully !", users);
};

export const getUserByIdService = async (id: string) => {
  const user = await getUserByIdRepo(id);

  if (!user) {
    return apiResponse(true, StatusCode.NOT_FOUND, "User Not Found!", null);
  }

  return apiResponse(false, StatusCode.OK, "User Found!", user);
};

export const createUserService = async (data: RequestUserType) => {
  const { error } = requestUserValidation(data);
  if (error) {
    return apiResponse(true, StatusCode.BAD_REQUEST, error.message, null);
  }

  const user = await getUserByFullName(fullNameParser(data.fullName));
  if (user) {
    return apiResponse(
      false,
      StatusCode.CREATED,
      "User is exist, not created!",
      user
    );
  }

  const newUser = await createUserRepo({
    fullName: fullNameParser(data.fullName),
  });
  return apiResponse(
    false,
    StatusCode.CREATED,
    "Create User Successfully",
    newUser
  );
};

export const updateUserByIdService = async (
  id: string,
  data: RequestUserType
) => {
  const user = await getUserByIdRepo(id);
  if (!user) {
    return apiResponse(true, StatusCode.NOT_FOUND, "User Not Found!", null);
  }

  if (!data) {
    return apiResponse(false, StatusCode.OK, "User Not Updated!", user);
  }

  const updatedUser = await updateUserByIdRepo(id, data);
  return apiResponse(
    false,
    StatusCode.OK,
    "User Updated Successfully!",
    updatedUser
  );
};

export const deleteUserByIdService = async (id: string) => {
  const user = await getUserByIdRepo(id);
  if (!user) {
    return apiResponse(true, StatusCode.NOT_FOUND, "User Not Found!", null);
  }

  const deletedUser = await deleteUserByIdRepo(id);
  return apiResponse(
    false,
    StatusCode.OK,
    "User Deleted Successfully!",
    deletedUser
  );
};
