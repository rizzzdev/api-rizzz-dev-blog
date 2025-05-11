import Joi from "joi";
import { RequestSeriesType } from "../types/seriesType";

export const requestSeriesValidation = (data: RequestSeriesType) => {
  const schema = Joi.object<RequestSeriesType>({
    seriesName: Joi.string().required(),
  });

  return schema.validate(data);
};
