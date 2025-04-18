import Joi from "joi";
import { RequestCategoryType } from "../types/categoryType";

export const requestCategoryValidation = (data: RequestCategoryType) => {
  const schema = Joi.object<RequestCategoryType>({
    categoryName: Joi.string().required(),
  });

  return schema.validate(data);
};
