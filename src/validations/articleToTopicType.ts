import Joi from "joi";
import { RequestArticleToTopicType } from "../types/articleToTopicType";

export const requestArticleToTopicValidation = (
  data: RequestArticleToTopicType
) => {
  const schema = Joi.object<RequestArticleToTopicType>({
    topicId: Joi.string().required(),
    articleId: Joi.string().required(),
  });

  return schema.validate(data);
};
