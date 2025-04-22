import Joi from "joi";
import { RequestTopicType } from "../types/topicType";

export const requestTopicValidation = (data: RequestTopicType) => {
  const schema = Joi.object<RequestTopicType>({
    topicName: Joi.string().required(),
  });

  return schema.validate(data);
};
