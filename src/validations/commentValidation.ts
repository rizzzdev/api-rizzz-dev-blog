import Joi from "joi";
import { RequestReactionType } from "../types/reactionType";

export const requestReactionValidation = (data: RequestReactionType) => {
  const schema = Joi.object<RequestReactionType>({
    articleId: Joi.string().optional(),
    userId: Joi.string().optional(),
    reactionText: Joi.string().required(),
  });

  return schema.validate(data);
};
