import Joi from "joi";
import { RequestPostType } from "../types/postType";

export const requestPostValidation = (data: RequestPostType) => {
  const schema = Joi.object<RequestPostType>({
    authorId: Joi.string().required(),
    title: Joi.string().required(),
    postMarkdown: Joi.string().required(),
    description: Joi.string().required(),
    imageUrl: Joi.string().optional(),
  });

  return schema.validate(data);
};
