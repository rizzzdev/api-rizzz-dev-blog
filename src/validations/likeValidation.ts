import Joi from "joi";
import { RequestLikeType } from "../types/likeType";

export const requestLikeValidation = (data: RequestLikeType) => {
  const schema = Joi.object<RequestLikeType>({
    userId: Joi.string().required(),
    commentId: Joi.string().optional(),
    postId: Joi.string().optional(),
  });

  return schema.validate(data);
};
