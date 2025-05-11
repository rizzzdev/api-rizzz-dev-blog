import { apiResponse } from "../libs/apiResponse";
import {
  createSeriesRepo,
  deleteSeriesByIdRepo,
  getSeriesByIdRepo,
  getSeriesRepo,
  updateSeriesByIdRepo,
} from "../repos/seriesRepo";
import { StatusCode } from "../types/apiResponseType";
import { RequestSeriesType } from "../types/seriesType";
import { requestSeriesValidation } from "../validations/seriesValidation";

export const getSeriesService = async () => {
  const series = await getSeriesRepo();

  if (!series[0]) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Series Not Found!", series);
  }

  return apiResponse(false, StatusCode.OK, "Get Series Successfully !", series);
};

export const getSeriesByIdService = async (id: string) => {
  const series = await getSeriesByIdRepo(id);

  if (!series) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Series Not Found!", null);
  }

  return apiResponse(false, StatusCode.OK, "Series Found!", series);
};

export const createSeriesService = async (data: RequestSeriesType) => {
  const { error } = requestSeriesValidation(data);
  if (error) {
    return apiResponse(true, StatusCode.BAD_REQUEST, error.message, null);
  }

  const series = await createSeriesRepo(data);
  return apiResponse(
    false,
    StatusCode.CREATED,
    "Create series successfully",
    series
  );
};

export const updateSeriesByIdService = async (
  id: string,
  data: RequestSeriesType
) => {
  const series = await getSeriesByIdRepo(id);
  if (!series) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Series Not Found!", null);
  }

  if (!data) {
    return apiResponse(false, StatusCode.OK, "Series Not Updated!", series);
  }

  const updatedSeries = await updateSeriesByIdRepo(id, data);
  return apiResponse(
    false,
    StatusCode.OK,
    "Series Updated Successfully!",
    updatedSeries
  );
};

export const deleteSeriesByIdService = async (id: string) => {
  const series = await getSeriesByIdRepo(id);
  if (!series) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Series Not Found!", null);
  }

  const deletedSeries = await deleteSeriesByIdRepo(id);
  return apiResponse(
    false,
    StatusCode.OK,
    "Series Deleted Successfully!",
    deletedSeries
  );
};
