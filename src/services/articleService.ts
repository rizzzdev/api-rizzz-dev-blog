import { apiResponse } from "../libs/apiResponse";
import {
  createArticleRepo,
  deleteArticleByIdRepo,
  getArticleByIdRepo,
  getArticlesRepo,
  updateArticleByIdRepo,
} from "../repos/articleRepo";
import { StatusCode } from "../types/apiResponseType";
import { RequestArticleType } from "../types/articleType";
import { requestArticleValidation } from "../validations/articleValidation";

export const getArticlesService = async () => {
  const articles = await getArticlesRepo();
  const sortedArticles = articles.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );

  if (!sortedArticles[0]) {
    return apiResponse(
      true,
      StatusCode.NOT_FOUND,
      "Articles Not Found!",
      sortedArticles
    );
  }

  return apiResponse(
    false,
    StatusCode.OK,
    "Get Articles Successfully !",
    sortedArticles
  );
};

export const getArticleByIdService = async (id: string) => {
  const article = await getArticleByIdRepo(id);

  if (!article) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Article Not Found!", null);
  }

  return apiResponse(false, StatusCode.OK, "Article Found!", article);
};

export const createArticleService = async (data: RequestArticleType) => {
  const { error } = requestArticleValidation(data);
  if (error) {
    return apiResponse(true, StatusCode.BAD_REQUEST, error.message, null);
  }

  const article = await createArticleRepo(data);
  return apiResponse(
    false,
    StatusCode.CREATED,
    "Create Article Successfully",
    article
  );
};

export const updateArticleByIdService = async (
  id: string,
  data: RequestArticleType
) => {
  const article = await getArticleByIdRepo(id);
  if (!article) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Article Not Found!", null);
  }

  if (!data) {
    return apiResponse(false, StatusCode.OK, "Article Not Updated!", article);
  }

  const updatedArticle = await updateArticleByIdRepo(id, data);
  return apiResponse(
    false,
    StatusCode.OK,
    "Article Updated Successfully!",
    updatedArticle
  );
};

export const deleteArticleByIdService = async (id: string) => {
  const article = await getArticleByIdRepo(id);
  if (!article) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Article Not Found!", null);
  }

  const deletedArticle = await deleteArticleByIdRepo(id);
  return apiResponse(
    false,
    StatusCode.OK,
    "Article Deleted Successfully!",
    deletedArticle
  );
};
