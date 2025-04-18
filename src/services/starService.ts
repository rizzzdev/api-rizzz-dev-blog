import { apiResponse } from "../libs/apiResponse";
import {
  createStarRepo,
  deleteStarByIdRepo,
  getStarByIdRepo,
  getStarsRepo,
  updateStarByIdRepo,
} from "../repos/starRepo";
import { StatusCode } from "../types/apiResponseType";
import { RequestStarType } from "../types/starType";
import { requestStarValidation } from "../validations/starValidation";

export const getStarsService = async () => {
  const stars = await getStarsRepo();

  if (!stars[0]) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Stars Not Found!", stars);
  }

  return apiResponse(false, StatusCode.OK, "Get Stars Successfully !", stars);
};

export const getStarByIdService = async (id: string) => {
  const star = await getStarByIdRepo(id);

  if (!star) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Star Not Found!", null);
  }

  return apiResponse(false, StatusCode.OK, "Star Found!", star);
};

export const createStarService = async (data: RequestStarType) => {
  const { error } = requestStarValidation(data);
  if (error) {
    return apiResponse(true, StatusCode.BAD_REQUEST, error.message, null);
  }

  const star = await createStarRepo(data);
  return apiResponse(
    false,
    StatusCode.CREATED,
    "Create Star Successfully",
    star
  );
};

export const updateStarByIdService = async (
  id: string,
  data: RequestStarType
) => {
  const star = await getStarByIdRepo(id);
  if (!star) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Star Not Found!", null);
  }

  if (!data) {
    return apiResponse(false, StatusCode.OK, "Star Not Updated!", star);
  }

  const updatedStar = await updateStarByIdRepo(id, data);
  return apiResponse(
    false,
    StatusCode.OK,
    "Star Updated Successfully!",
    updatedStar
  );
};

export const deleteStarByIdService = async (id: string) => {
  const star = await getStarByIdRepo(id);
  if (!star) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Star Not Found!", null);
  }

  const deletedStar = await deleteStarByIdRepo(id);
  return apiResponse(
    false,
    StatusCode.OK,
    "Star Deleted Successfully!",
    deletedStar
  );
};
