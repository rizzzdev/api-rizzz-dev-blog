import Joi from "joi";
import { RequestUserType } from "../types/userType";

export const requestUserValidation = (data: RequestUserType) => {
  const schema = Joi.object<RequestUserType>({
    fullName: Joi.string().required(),
  });

  return schema.validate(data);
};
