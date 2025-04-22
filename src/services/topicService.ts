import { apiResponse } from "../libs/apiResponse";
import {
  createTopicRepo,
  deleteTopicByIdRepo,
  getTopicsRepo,
  getTopicByIdRepo,
  updateTopicByIdRepo,
} from "../repos/topicRepo";
import { StatusCode } from "../types/apiResponseType";
import { RequestTopicType } from "../types/topicType";
import { requestTopicValidation } from "../validations/topicValidation";

export const getTopicsService = async () => {
  const topics = await getTopicsRepo();

  if (!topics[0]) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Topics Not Found!", topics);
  }

  return apiResponse(false, StatusCode.OK, "Get Topics Successfully !", topics);
};

export const getTopicByIdService = async (id: string) => {
  const topic = await getTopicByIdRepo(id);

  if (!topic) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Topic Not Found!", null);
  }

  return apiResponse(false, StatusCode.OK, "Topic Found!", topic);
};

export const createTopicService = async (data: RequestTopicType) => {
  const { error } = requestTopicValidation(data);
  if (error) {
    return apiResponse(true, StatusCode.BAD_REQUEST, error.message, null);
  }

  const topic = await createTopicRepo(data);
  return apiResponse(
    false,
    StatusCode.CREATED,
    "Create Topic successfully",
    topic
  );
};

export const updateTopicByIdService = async (
  id: string,
  data: RequestTopicType
) => {
  const topic = await getTopicByIdRepo(id);
  if (!topic) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Topic Not Found!", null);
  }

  if (!data) {
    return apiResponse(false, StatusCode.OK, "Topic Not Updated!", topic);
  }

  const updatedTopic = await updateTopicByIdRepo(id, data);
  return apiResponse(
    false,
    StatusCode.OK,
    "Topic Updated Successfully!",
    updatedTopic
  );
};

export const deleteTopicByIdService = async (id: string) => {
  const topic = await getTopicByIdRepo(id);
  if (!topic) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Topic Not Found!", null);
  }

  const deletedTopic = await deleteTopicByIdRepo(id);
  return apiResponse(
    false,
    StatusCode.OK,
    "Topic Deleted Successfully!",
    deletedTopic
  );
};
