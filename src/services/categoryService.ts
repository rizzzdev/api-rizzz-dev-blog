import { apiResponse } from "../libs/apiResponse";
import {
  createCategoryRepo,
  deleteCategoryByIdRepo,
  getCategoriesRepo,
  getCategoryByIdRepo,
  updateCategoryByIdRepo,
} from "../repos/categoryRepo";
import { StatusCode } from "../types/apiResponseType";
import { RequestCategoryType } from "../types/categoryType";
import { requestCategoryValidation } from "../validations/categoryValidation";

export const getCategoriesService = async () => {
  const categories = await getCategoriesRepo();

  if (!categories[0]) {
    return apiResponse(
      true,
      StatusCode.NOT_FOUND,
      "Categories Not Found!",
      categories
    );
  }

  return apiResponse(
    false,
    StatusCode.OK,
    "Get Categories Successfully !",
    categories
  );
};

export const getCategoryByIdService = async (id: string) => {
  const category = await getCategoryByIdRepo(id);

  if (!category) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Category Not Found!", null);
  }

  return apiResponse(false, StatusCode.OK, "Category Found!", category);
};

export const createCategoryService = async (data: RequestCategoryType) => {
  const { error } = requestCategoryValidation(data);
  if (error) {
    return apiResponse(true, StatusCode.BAD_REQUEST, error.message, null);
  }

  const category = await createCategoryRepo(data);
  return apiResponse(
    false,
    StatusCode.CREATED,
    "Create Category successfully",
    category
  );
};

export const updateCategoryByIdService = async (
  id: string,
  data: RequestCategoryType
) => {
  const category = await getCategoryByIdRepo(id);
  if (!category) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Category Not Found!", null);
  }

  if (!data) {
    return apiResponse(false, StatusCode.OK, "Category Not Updated!", category);
  }

  const updatedCategory = await updateCategoryByIdRepo(id, data);
  return apiResponse(
    false,
    StatusCode.OK,
    "Category Updated Successfully!",
    updatedCategory
  );
};

export const deleteCategoryByIdService = async (id: string) => {
  const category = await getCategoryByIdRepo(id);
  if (!category) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Category Not Found!", null);
  }

  const deletedCategory = await deleteCategoryByIdRepo(id);
  return apiResponse(
    false,
    StatusCode.OK,
    "Category Deleted Successfully!",
    deletedCategory
  );
};
