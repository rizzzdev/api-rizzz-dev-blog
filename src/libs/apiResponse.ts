import { ApiResponseType, StatusCode } from "../types/apiResponseType";

export const apiResponse = <DataType>(
  error: boolean,
  statusCode: StatusCode,
  message: string,
  data: DataType
): ApiResponseType<DataType> => {
  return {
    error,
    statusCode,
    message,
    data,
  };
};
