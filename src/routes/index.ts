import { Application, Router } from "express";
import cookieRouter from "./cookieRoute";
import authorRouter from "./authorRoute";
import articleRouter from "./articleRoute";
import reactionRouter from "./reactionRoute";
import starRouter from "./starRoute";
import userRouter from "./userRoute";
import pageviewRouter from "./pageviewRoute";
import sessionRouter from "./sessionRoute";
import seriesRouter from "./seriesRoute";

const _routes: { endpoint: string; router: Router }[] = [
  {
    endpoint: "/cookies",
    router: cookieRouter,
  },
  {
    endpoint: "/authors",
    router: authorRouter,
  },
  {
    endpoint: "/articles",
    router: articleRouter,
  },
  {
    endpoint: "/reactions",
    router: reactionRouter,
  },
  {
    endpoint: "/stars",
    router: starRouter,
  },
  {
    endpoint: "/users",
    router: userRouter,
  },
  {
    endpoint: "/pageviews",
    router: pageviewRouter,
  },
  {
    endpoint: "/sessions",
    router: sessionRouter,
  },
  {
    endpoint: "/series",
    router: seriesRouter,
  },
];

export const routes = (app: Application) => {
  _routes.forEach((_route) => {
    const { endpoint, router } = _route;
    app.use(endpoint, router);
  });
  return app;
};
