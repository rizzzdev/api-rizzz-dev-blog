import { apiResponse } from "../libs/apiResponse";
import {
  createPageviewRepo,
  deletePageviewByIdRepo,
  getPageviewByIdRepo,
  getPageviewsRepo,
  updatePageviewByIdRepo,
} from "../repos/pageviewRepo";
import { StatusCode } from "../types/apiResponseType";
import { RequestPageviewType } from "../types/pageviewType";
import { requestPageviewValidation } from "../validations/pageviewValidation";

export const getPageviewsService = async () => {
  const pageviews = await getPageviewsRepo();

  if (!pageviews[0]) {
    return apiResponse(
      true,
      StatusCode.NOT_FOUND,
      "Pageviews Not Found!",
      pageviews
    );
  }

  return apiResponse(
    false,
    StatusCode.OK,
    "Get Pageviews Successfully !",
    pageviews
  );
};

export const getPageviewByIdService = async (id: string) => {
  const pageview = await getPageviewByIdRepo(id);
  if (!pageview) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Pageview Not Found!", null);
  }

  return apiResponse(false, StatusCode.OK, "Pageview Found!", pageview);
};

export const createPageviewService = async (data: RequestPageviewType) => {
  const { error } = requestPageviewValidation(data);
  if (error) {
    return apiResponse(true, StatusCode.BAD_REQUEST, error.message, null);
  }

  const pageview = await createPageviewRepo(data);
  return apiResponse(
    false,
    StatusCode.CREATED,
    "Create Pageview Successfully",
    pageview
  );
};

export const updatePageviewByIdService = async (
  id: string,
  data: RequestPageviewType
) => {
  const pageview = await getPageviewByIdRepo(id);
  if (!pageview) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Pageview Not Found!", null);
  }

  const updatedPageview = await updatePageviewByIdRepo(id, data);
  return apiResponse(
    false,
    StatusCode.OK,
    "Pageview Updated Successfully",
    updatedPageview
  );
};

export const deletePageviewByIdService = async (id: string) => {
  const pageview = await getPageviewByIdRepo(id);
  if (!pageview) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Pageview Not Found!", null);
  }

  const deletedPageview = await deletePageviewByIdRepo(id);
  return apiResponse(
    false,
    StatusCode.OK,
    "Pageview Deleted Successfully",
    deletedPageview
  );
};
