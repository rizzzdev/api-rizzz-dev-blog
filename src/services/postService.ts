import { apiResponse } from "../libs/apiResponse";
import {
  createPostRepo,
  deletePostByIdRepo,
  getPostByIdRepo,
  getPostsRepo,
  updatePostByIdRepo,
} from "../repos/postRepo";
import { StatusCode } from "../types/apiResponseType";
import { RequestPostType } from "../types/postType";
import { requestPostValidation } from "../validations/postValidation";

export const getPostsService = async () => {
  const posts = await getPostsRepo();
  const sortedPosts = posts.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );

  if (!sortedPosts[0]) {
    return apiResponse(
      true,
      StatusCode.NOT_FOUND,
      "Posts Not Found!",
      sortedPosts
    );
  }

  return apiResponse(
    false,
    StatusCode.OK,
    "Get Posts Successfully !",
    sortedPosts
  );
};

export const getPostByIdService = async (id: string) => {
  const post = await getPostByIdRepo(id);

  if (!post) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Post Not Found!", null);
  }

  return apiResponse(false, StatusCode.OK, "Post Found!", post);
};

export const createPostService = async (data: RequestPostType) => {
  const { error } = requestPostValidation(data);
  if (error) {
    return apiResponse(true, StatusCode.BAD_REQUEST, error.message, null);
  }

  const post = await createPostRepo(data);
  return apiResponse(
    false,
    StatusCode.CREATED,
    "Create Post Successfully",
    post
  );
};

export const updatePostByIdService = async (
  id: string,
  data: RequestPostType
) => {
  const post = await getPostByIdRepo(id);
  if (!post) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Post Not Found!", null);
  }

  if (!data) {
    return apiResponse(false, StatusCode.OK, "Post Not Updated!", post);
  }

  const updatedPost = await updatePostByIdRepo(id, data);
  return apiResponse(
    false,
    StatusCode.OK,
    "Post Updated Successfully!",
    updatedPost
  );
};

export const deletePostByIdService = async (id: string) => {
  const post = await getPostByIdRepo(id);
  if (!post) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Post Not Found!", null);
  }

  const deletedPost = await deletePostByIdRepo(id);
  return apiResponse(
    false,
    StatusCode.OK,
    "Post Deleted Successfully!",
    deletedPost
  );
};
