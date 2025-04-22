import { Application, Router } from "express";
import cookieRouter from "./cookieRoute";
import authorRouter from "./authorRoute";
import postRouter from "./postRoute";
import categoryRouter from "./categoryRoute";
import commentRouter from "./commentRoute";
import starRouter from "./starRoute";
import postToCategoryRouter from "./postToCategoryRoute";
import userRouter from "./userRoute";
import pageviewRouter from "./pageviewRoute";
import sessionRouter from "./sessionRoute";

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
    endpoint: "/posts",
    router: postRouter,
  },
  {
    endpoint: "/categories",
    router: categoryRouter,
  },
  {
    endpoint: "/comments",
    router: commentRouter,
  },
  {
    endpoint: "/stars",
    router: starRouter,
  },
  {
    endpoint: "/post-to-categories",
    router: postToCategoryRouter,
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
];

export const routes = (app: Application) => {
  _routes.forEach((_route) => {
    const { endpoint, router } = _route;
    app.use(endpoint, router);
  });
  return app;
};
