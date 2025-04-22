import { Application, Router } from "express";
import cookieRouter from "./cookieRoute";
import authorRouter from "./authorRoute";
import articleRouter from "./articleRoute";
import topicRouter from "./topicRoute";
import reactionRouter from "./reactionRoute";
import starRouter from "./starRoute";
import articleToTopicRouter from "./articleToTopicRoute";
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
    endpoint: "/articles",
    router: articleRouter,
  },
  {
    endpoint: "/topics",
    router: topicRouter,
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
    endpoint: "/article-to-topics",
    router: articleToTopicRouter,
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
