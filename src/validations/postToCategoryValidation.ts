import Joi from "joi";
import { RequestPostToCategoryType } from "../types/postToCategoryType";

export const requestPostToCategoryValidation = (
  data: RequestPostToCategoryType
) => {
  const schema = Joi.object<RequestPostToCategoryType>({
    categoryId: Joi.string().required(),
    postId: Joi.string().required(),
  });

  return schema.validate(data);
};
