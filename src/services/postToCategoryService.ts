import { apiResponse } from "../libs/apiResponse";
import {
  createPostToCategoryRepo,
  deletePostToCategoryByIdRepo,
  getPostToCategoriesRepo,
  getPostToCategoryByIdRepo,
  updatePostToCategoryByIdRepo,
} from "../repos/postToCategoryRepo";
import { StatusCode } from "../types/apiResponseType";
import { RequestPostToCategoryType } from "../types/postToCategoryType";
import { requestPostToCategoryValidation } from "../validations/postToCategoryValidation";

export const getPostToCategoriesService = async () => {
  const postToCategory = await getPostToCategoriesRepo();

  if (!postToCategory[0]) {
    return apiResponse(
      true,
      StatusCode.NOT_FOUND,
      "Post To Categories Not Found!",
      postToCategory
    );
  }

  return apiResponse(
    false,
    StatusCode.OK,
    "Get Post To Categories Successfully !",
    postToCategory
  );
};

export const getPostToCategoryByIdService = async (id: string) => {
  const postToCategory = await getPostToCategoryByIdRepo(id);

  if (!postToCategory) {
    return apiResponse(
      true,
      StatusCode.NOT_FOUND,
      "Post To Category Not Found!",
      null
    );
  }

  return apiResponse(
    false,
    StatusCode.OK,
    "Post To Category Found!",
    postToCategory
  );
};

export const createPostToCategoryService = async (
  data: RequestPostToCategoryType
) => {
  const { error } = requestPostToCategoryValidation(data);
  if (error) {
    return apiResponse(true, StatusCode.BAD_REQUEST, error.message, null);
  }

  const postToCategory = await createPostToCategoryRepo(data);
  return apiResponse(
    false,
    StatusCode.CREATED,
    "Create Post To Category Successfully",
    postToCategory
  );
};

export const updatePostToCategoryByIdService = async (
  id: string,
  data: RequestPostToCategoryType
) => {
  const postToCategory = await getPostToCategoryByIdRepo(id);
  if (!postToCategory) {
    return apiResponse(
      true,
      StatusCode.NOT_FOUND,
      "Post To Category Not Found!",
      null
    );
  }

  if (!data) {
    return apiResponse(
      false,
      StatusCode.OK,
      "Post To Category Not Updated!",
      postToCategory
    );
  }

  const updatedPostToCategory = await updatePostToCategoryByIdRepo(id, data);
  return apiResponse(
    false,
    StatusCode.OK,
    "Post To Category Updated Successfully!",
    updatedPostToCategory
  );
};

export const deletePostToCategoryByIdService = async (id: string) => {
  const postToCategory = await getPostToCategoryByIdRepo(id);
  if (!postToCategory) {
    return apiResponse(
      true,
      StatusCode.NOT_FOUND,
      "Post To Category Not Found!",
      null
    );
  }

  const deletedPostToCategory = await deletePostToCategoryByIdRepo(id);
  return apiResponse(
    false,
    StatusCode.OK,
    "Post To Category Deleted Successfully!",
    deletedPostToCategory
  );
};
