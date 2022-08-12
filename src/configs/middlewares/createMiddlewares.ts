import * as express from "express";
import cors from "cors";
import { json } from "body-parser";
import morgan from "morgan";

const createMiddlewares = (app: express.Express) => {
  app.use(cors());
  app.use(json({ limit: '5mb' }));
  app.use(morgan('dev'));
};

export default createMiddlewares;