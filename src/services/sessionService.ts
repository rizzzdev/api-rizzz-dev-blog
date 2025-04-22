import { apiResponse } from "../libs/apiResponse";
import { getAuthorByAuthorIdRepo } from "../repos/authorRepo";
import {
  createSessionRepo,
  deleteSessionByIdRepo,
  getSessionByIdRepo,
  getSessionsRepo,
  updateSessionByIdRepo,
} from "../repos/sessionRepo";
import { StatusCode } from "../types/apiResponseType";
import { RequestSessionType } from "../types/sessionType";
import { requestSessionValidation } from "../validations/sessionValidation";

export const getSessionsService = async () => {
  const sessions = await getSessionsRepo();

  if (!sessions[0]) {
    return apiResponse(
      true,
      StatusCode.NOT_FOUND,
      "Sessions Not Found!",
      sessions
    );
  }

  return apiResponse(
    false,
    StatusCode.OK,
    "Get Sessions Successfully!",
    sessions
  );
};

export const getSessionByIdService = async (id: string) => {
  const session = await getSessionByIdRepo(id);

  if (!session) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Session Not Found!", null);
  }

  return apiResponse(false, StatusCode.OK, "Session Found!", session);
};

export const createSessionService = async (data: RequestSessionType) => {
  const { error } = requestSessionValidation(data);
  if (error) {
    return apiResponse(true, StatusCode.BAD_REQUEST, error.message, null);
  }

  const author = await getAuthorByAuthorIdRepo(data.authorId);
  if (!author) {
    return apiResponse(true, StatusCode.BAD_REQUEST, "Author Not Found!", null);
  }

  if (data.password !== author.password) {
    return apiResponse(
      true,
      StatusCode.BAD_REQUEST,
      "Password Not Match!",
      null
    );
  }

  const session = await createSessionRepo(data);
  return apiResponse(
    false,
    StatusCode.CREATED,
    "Create session successfully",
    session
  );
};

export const updateSessionByIdService = async (
  id: string,
  data: RequestSessionType
) => {
  const session = await getSessionByIdRepo(id);
  if (!session) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Session Not Found!", null);
  }

  if (!data) {
    return apiResponse(false, StatusCode.OK, "Session Not Updated!", session);
  }

  const updatedSession = await updateSessionByIdRepo(id, data);
  return apiResponse(
    false,
    StatusCode.OK,
    "Author Updated Successfully!",
    updatedSession
  );
};

export const deleteSessionByIdService = async (id: string) => {
  const session = await getSessionByIdRepo(id);
  if (!session) {
    return apiResponse(true, StatusCode.NOT_FOUND, "Session Not Found!", null);
  }

  const deletedSession = await deleteSessionByIdRepo(id);
  return apiResponse(
    false,
    StatusCode.OK,
    "Session Deleted Successfully!",
    deletedSession
  );
};
