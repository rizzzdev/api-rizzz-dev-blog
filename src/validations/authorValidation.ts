import Joi from "joi";
import { RequestAuthorType } from "../types/authorType";

export const requestAuthorValidation = (data: RequestAuthorType) => {
  const schema = Joi.object<RequestAuthorType>({
    authorId: Joi.string().required(),
    fullName: Joi.string().required(),
    password: Joi.string().required(),
  });

  return schema.validate(data);
};
