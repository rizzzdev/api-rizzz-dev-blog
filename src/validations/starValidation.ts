import Joi from "joi";
import { RequestStarType } from "../types/starType";

export const requestStarValidation = (data: RequestStarType) => {
  const schema = Joi.object<RequestStarType>({
    userId: Joi.string().required(),
    articleId: Joi.string().optional(),
  });

  return schema.validate(data);
};
