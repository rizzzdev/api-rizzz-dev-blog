import { apiResponse } from "../libs/apiResponse";
import {
  createCommentRepo,
  deleteCommentsByIdRepo,
  getCommentByIdRepo,
  getCommentsRepo,
  updateCommentByIdRepo,
} from "../repos/commentRepo";
import { StatusCode } from "../types/apiResponseType";
import { RequestCommentType } from "../types/commentType";
import { requestCommentValidation } from "../validations/commentValidation";

export const getCommentsService = async () => {
  const comments = await getCommentsRepo();

  if (!comments[0]) {
    return apiResponse(
      true,
      StatusCode.NOT_FOUND,
      "Comments Not Found!",
      comments
    );
  }

  return apiResponse(
    false,
    StatusCode.OK,
    "Get Comments Successfully !",
    comments
  );
};

export const getCommentByIdService = async (id: string) => {
  const comment = await getCommentByIdRepo(id);

  if (!comment) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Comment Not Found!", null);
  }

  return apiResponse(false, StatusCode.OK, "Comment Found!", comment);
};

export const createCommentService = async (data: RequestCommentType) => {
  const { error } = requestCommentValidation(data);
  if (error) {
    return apiResponse(true, StatusCode.BAD_REQUEST, error.message, null);
  }

  const comment = await createCommentRepo(data);
  return apiResponse(
    false,
    StatusCode.CREATED,
    "Create comment successfully",
    comment
  );
};

export const updateCommentByIdService = async (
  id: string,
  data: RequestCommentType
) => {
  const comment = await getCommentByIdRepo(id);
  if (!comment) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Comment Not Found!", null);
  }

  if (!data) {
    return apiResponse(false, StatusCode.OK, "Comment Not Updated!", comment);
  }

  const updatedComment = await updateCommentByIdRepo(id, data);
  return apiResponse(
    false,
    StatusCode.OK,
    "Comment Updated Successfully!",
    updatedComment
  );
};

export const deleteCommentByIdService = async (id: string) => {
  const comment = await getCommentByIdRepo(id);
  if (!comment) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Comment Not Found!", null);
  }

  const deletedComment = await deleteCommentsByIdRepo(id);
  return apiResponse(
    false,
    StatusCode.OK,
    "Comment Deleted Successfully!",
    deletedComment
  );
};
