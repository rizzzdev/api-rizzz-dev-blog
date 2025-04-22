import Joi from "joi";
import { RequestArticleType } from "../types/articleType";

export const requestArticleValidation = (data: RequestArticleType) => {
  const schema = Joi.object<RequestArticleType>({
    authorId: Joi.string().required(),
    title: Joi.string().required(),
    articleMarkdown: Joi.string().required(),
    description: Joi.string().required(),
    imageUrl: Joi.string().optional(),
  });

  return schema.validate(data);
};
