import { Application, Router } from "express";
import cookieRouter from "./cookieRoute";

const _routes: [string, Router][] = [["/cookie", cookieRouter]];

export const routes = (app: Application) => {
  _routes.forEach((_route) => {
    const [endpoint, router] = _route;
    app.use(endpoint, router);
  });
  return app;
};
