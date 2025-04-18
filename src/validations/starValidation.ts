import Joi from "joi";
import { RequestAuthorType } from "../types/authorType";
import { RequestStarType } from "../types/starType";

export const requestStarValidation = (data: RequestStarType) => {
  const schema = Joi.object<RequestStarType>({
    postId: Joi.string().required(),
    userId: Joi.string().required(),
    star: Joi.number().min(1).max(5).required(),
  });

  return schema.validate(data);
};
