import { apiResponse } from "../libs/apiResponse";
import {
  createReactionRepo,
  deleteReactionsByIdRepo,
  getReactionByIdRepo,
  getReactionsRepo,
  updateReactionByIdRepo,
} from "../repos/reactionRepo";
import { StatusCode } from "../types/apiResponseType";
import { RequestReactionType } from "../types/reactionType";
import { requestReactionValidation } from "../validations/commentValidation";

export const getReactionsService = async () => {
  const reactions = await getReactionsRepo();

  if (!reactions[0]) {
    return apiResponse(
      true,
      StatusCode.NOT_FOUND,
      "Reactions Not Found!",
      reactions
    );
  }

  return apiResponse(
    false,
    StatusCode.OK,
    "Get Reactions Successfully !",
    reactions
  );
};

export const getReactionByIdService = async (id: string) => {
  const reaction = await getReactionByIdRepo(id);

  if (!reaction) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Reaction Not Found!", null);
  }

  return apiResponse(false, StatusCode.OK, "Reaction Found!", reaction);
};

export const createReactionService = async (data: RequestReactionType) => {
  const { error } = requestReactionValidation(data);
  if (error) {
    return apiResponse(true, StatusCode.BAD_REQUEST, error.message, null);
  }

  const reaction = await createReactionRepo(data);
  return apiResponse(
    false,
    StatusCode.CREATED,
    "Create reaction successfully",
    reaction
  );
};

export const updateReactionByIdService = async (
  id: string,
  data: RequestReactionType
) => {
  const reaction = await getReactionByIdRepo(id);
  if (!reaction) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Reaction Not Found!", null);
  }

  if (!data) {
    return apiResponse(false, StatusCode.OK, "Reaction Not Updated!", reaction);
  }

  const updatedReaction = await updateReactionByIdRepo(id, data);
  return apiResponse(
    false,
    StatusCode.OK,
    "Reaction Updated Successfully!",
    updatedReaction
  );
};

export const deleteReactionByIdService = async (id: string) => {
  const reaction = await getReactionByIdRepo(id);
  if (!reaction) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Reaction Not Found!", null);
  }

  const deletedReaction = await deleteReactionsByIdRepo(id);
  return apiResponse(
    false,
    StatusCode.OK,
    "Reaction Deleted Successfully!",
    deletedReaction
  );
};
