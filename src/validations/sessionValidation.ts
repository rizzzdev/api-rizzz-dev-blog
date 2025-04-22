import Joi from "joi";
import { RequestSessionType } from "../types/sessionType";

export const requestSessionValidation = (data: RequestSessionType) => {
  const schema = Joi.object<RequestSessionType>({
    authorId: Joi.string().required(),
    password: Joi.string().required(),
  });

  return schema.validate(data);
};
