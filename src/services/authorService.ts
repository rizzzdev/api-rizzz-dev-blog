import { apiResponse } from "../libs/apiResponse";
import {
  createAuthorRepo,
  deleteAuthorByIdRepo,
  getAuthorByIdRepo,
  getAuthorsRepo,
  updateAuthorByIdRepo,
} from "../repos/authorRepo";
import { StatusCode } from "../types/apiResponseType";
import { RequestAuthorType } from "../types/authorType";
import { requestAuthorValidation } from "../validations/authorValidation";

export const getAuthorsService = async () => {
  const authors = await getAuthorsRepo();

  if (!authors[0]) {
    return apiResponse(
      true,
      StatusCode.NOT_FOUND,
      "Authors Not Found!",
      authors
    );
  }

  return apiResponse(
    false,
    StatusCode.OK,
    "Get Authors Successfully !",
    authors
  );
};

export const getAuthorByIdService = async (id: string) => {
  const author = await getAuthorByIdRepo(id);

  if (!author) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Author Not Found!", null);
  }

  return apiResponse(false, StatusCode.OK, "Author Found!", author);
};

export const createAuthorService = async (data: RequestAuthorType) => {
  const { error } = requestAuthorValidation(data);
  if (error) {
    return apiResponse(true, StatusCode.BAD_REQUEST, error.message, null);
  }

  const author = await createAuthorRepo(data);
  return apiResponse(
    false,
    StatusCode.CREATED,
    "Create author successfully",
    author
  );
};

export const updateAuthorByIdService = async (
  id: string,
  data: RequestAuthorType
) => {
  const author = await getAuthorByIdRepo(id);
  if (!author) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Author Not Found!", null);
  }

  if (!data) {
    return apiResponse(false, StatusCode.OK, "Author Not Updated!", author);
  }

  const updatedAuthor = await updateAuthorByIdRepo(id, data);
  return apiResponse(
    false,
    StatusCode.OK,
    "Author Updated Successfully!",
    updatedAuthor
  );
};

export const deleteAuthorByIdService = async (id: string) => {
  const author = await getAuthorByIdRepo(id);
  if (!author) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Author Not Found!", null);
  }

  const deletedAuthor = await deleteAuthorByIdRepo(id);
  return apiResponse(
    false,
    StatusCode.OK,
    "Author Deleted Successfully!",
    deletedAuthor
  );
};
