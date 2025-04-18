import { apiResponse } from "../libs/apiResponse";
import {
  createLikeRepo,
  deleteLikeByIdRepo,
  getLikeByIdRepo,
  getLikesRepo,
  updateLikeByIdRepo,
} from "../repos/likeRepo";
import { StatusCode } from "../types/apiResponseType";
import { RequestLikeType } from "../types/likeType";
import { requestLikeValidation } from "../validations/likeValidation";

export const getLikesService = async () => {
  const likes = await getLikesRepo();

  if (!likes[0]) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Likes Not Found!", likes);
  }

  return apiResponse(false, StatusCode.OK, "Get Likes Successfully !", likes);
};

export const getLikeByIdService = async (id: string) => {
  const like = await getLikeByIdRepo(id);

  if (!like) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Like Not Found!", null);
  }

  return apiResponse(false, StatusCode.OK, "Like Found!", like);
};

export const createLikeService = async (data: RequestLikeType) => {
  const { error } = requestLikeValidation(data);
  if (error) {
    return apiResponse(true, StatusCode.BAD_REQUEST, error.message, null);
  }

  const like = await createLikeRepo(data);
  return apiResponse(
    false,
    StatusCode.CREATED,
    "Create Like Successfully",
    like
  );
};

export const updateLikeByIdService = async (
  id: string,
  data: RequestLikeType
) => {
  const like = await getLikeByIdRepo(id);
  if (!like) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Like Not Found!", null);
  }

  if (!data) {
    return apiResponse(false, StatusCode.OK, "Like Not Updated!", like);
  }

  const updatedLike = await updateLikeByIdRepo(id, data);
  return apiResponse(
    false,
    StatusCode.OK,
    "Like Updated Successfully!",
    updatedLike
  );
};

export const deleteLikeByIdService = async (id: string) => {
  const like = await getLikeByIdRepo(id);
  if (!like) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Like Not Found!", null);
  }

  const deletedLike = await deleteLikeByIdRepo(id);
  return apiResponse(
    false,
    StatusCode.OK,
    "Like Deleted Successfully!",
    deletedLike
  );
};
