import { Application, Router } from "express";
import cookieRouter from "./cookieRoute";
import authorRouter from "./authorRoute";
import postRouter from "./postRoute";
import categoryRouter from "./categoryRoute";
import commentRouter from "./commentRoute";
import likeRouter from "./likeRoute";
import postToCategoryRouter from "./postToCategoryRoute";
import starRouter from "./starRoute";
import userRouter from "./userRoute";

const _routes: { endpoint: string; router: Router }[] = [
  {
    endpoint: "/cookie",
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
    endpoint: "/likes",
    router: likeRouter,
  },
  {
    endpoint: "/post-to-categories",
    router: postToCategoryRouter,
  },
  {
    endpoint: "/stars",
    router: starRouter,
  },
  {
    endpoint: "/users",
    router: userRouter,
  },
];

export const routes = (app: Application) => {
  _routes.forEach((_route) => {
    const { endpoint, router } = _route;
    app.use(endpoint, router);
  });
  return app;
};
