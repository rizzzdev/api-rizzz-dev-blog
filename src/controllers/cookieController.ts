import { request, Request, Response } from "express";

export const getCookieController = async (
  request: Request,
  response: Response
) => {
  const cookie = request.cookies;
  response.send(cookie);
};

export const postCookieController = async (
  request: Request,
  response: Response
) => {
  const { fullName } = request.body;
  response.cookie("fullName", fullName, {
    httpOnly: true,
  });
  response.send("cookie created!");
};
