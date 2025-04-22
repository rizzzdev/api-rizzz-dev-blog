import { apiResponse } from "../libs/apiResponse";
import {
  createArticleToTopicRepo,
  deleteArticleToTopicByIdRepo,
  getArticleToTopicsRepo,
  getArticleToTopicByIdRepo,
  updateArticleToTopicByIdRepo,
} from "../repos/articleToTopicRepo";
import { StatusCode } from "../types/apiResponseType";
import { RequestArticleToTopicType } from "../types/articleToTopicType";
import { requestArticleToTopicValidation } from "../validations/articleToTopicType";

export const getArticleToTopicsService = async () => {
  const articleToTopics = await getArticleToTopicsRepo();

  if (!articleToTopics[0]) {
    return apiResponse(
      true,
      StatusCode.NOT_FOUND,
      "Article To Topics Not Found!",
      articleToTopics
    );
  }

  return apiResponse(
    false,
    StatusCode.OK,
    "Get Article To Topics Successfully !",
    articleToTopics
  );
};

export const getArticleToTopicByIdService = async (id: string) => {
  const articleToTopic = await getArticleToTopicByIdRepo(id);

  if (!articleToTopic) {
    return apiResponse(
      true,
      StatusCode.NOT_FOUND,
      "Article To Topic Not Found!",
      null
    );
  }

  return apiResponse(
    false,
    StatusCode.OK,
    "Article To Topic Found!",
    articleToTopic
  );
};

export const createArticleToTopicService = async (
  data: RequestArticleToTopicType
) => {
  const { error } = requestArticleToTopicValidation(data);
  if (error) {
    return apiResponse(true, StatusCode.BAD_REQUEST, error.message, null);
  }

  const articleToTopic = await createArticleToTopicRepo(data);
  return apiResponse(
    false,
    StatusCode.CREATED,
    "Create Article To Topic Successfully",
    articleToTopic
  );
};

export const updateArticleToTopicByIdService = async (
  id: string,
  data: RequestArticleToTopicType
) => {
  const articleToTopic = await getArticleToTopicByIdRepo(id);
  if (!articleToTopic) {
    return apiResponse(
      true,
      StatusCode.NOT_FOUND,
      "Article To Topic Not Found!",
      null
    );
  }

  if (!data) {
    return apiResponse(
      false,
      StatusCode.OK,
      "Article To Topic Not Updated!",
      articleToTopic
    );
  }

  const updatedArticleToTopic = await updateArticleToTopicByIdRepo(id, data);
  return apiResponse(
    false,
    StatusCode.OK,
    "Article To Topic Updated Successfully!",
    updatedArticleToTopic
  );
};

export const deleteArticleToTopicByIdService = async (id: string) => {
  const articleToTopic = await getArticleToTopicByIdRepo(id);
  if (!articleToTopic) {
    return apiResponse(
      true,
      StatusCode.NOT_FOUND,
      "Article To Topic Not Found!",
      null
    );
  }

  const deletedArticleToTopic = await deleteArticleToTopicByIdRepo(id);
  return apiResponse(
    false,
    StatusCode.OK,
    "Article To Topic Deleted Successfully!",
    deletedArticleToTopic
  );
};
