import Joi from "joi";
import { RequestCommentType } from "../types/commentType";

export const requestCommentValidation = (data: RequestCommentType) => {
  const schema = Joi.object<RequestCommentType>({
    postId: Joi.string().optional(),
    userId: Joi.string().optional(),
    commentText: Joi.string().required(),
  });

  return schema.validate(data);
};
