import express from "express";
import { errorHandler } from "../middleware/errorHandler";
import createRouters from "../routes";
import createMiddlewares from "./middlewares/createMiddlewares";

const createApp = (): express.Express => {
  const app = express();

  createMiddlewares(app);
  createRouters(app);
  errorHandler(app);

  return app;
};

export default createApp;