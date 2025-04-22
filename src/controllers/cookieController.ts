import { request, Request, Response } from "express";
import { RequestCookieType } from "../types/cookieType";
import { apiResponse } from "../libs/apiResponse";
import { StatusCode } from "../types/apiResponseType";

export const getCookieController = async (
  request: Request,
  response: Response
) => {
  const cookie = request.cookies as RequestCookieType;
  if (!cookie) {
    const responseApi = apiResponse(
      false,
      StatusCode.NOT_FOUND,
      "Cookie Not Found!",
      null
    );
    response.status(responseApi.statusCode).send(responseApi);
  }

  const responseApi = apiResponse(
    false,
    StatusCode.OK,
    "Cookie Found!",
    cookie
  );
  response.status(responseApi.statusCode).send(responseApi);
};
