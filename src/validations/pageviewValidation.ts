import Joi from "joi";
import { RequestPageviewType } from "../types/pageviewType";

export const requestPageviewValidation = (data: RequestPageviewType) => {
  const schema = Joi.object<RequestPageviewType>({
    userId: Joi.string().required(),
    articleId: Joi.string().optional(),
  });

  return schema.validate(data);
};
