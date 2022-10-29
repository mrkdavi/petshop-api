import {
  NextFunction,
  Request,
  RequestHandler,
  Response,
  Express,
} from "express";
import { BaseError } from "../@types/errors/BaseError";



export const errorHandler = (app: Express) => {
  app.use((err: BaseError, _req: Request, res: Response, next: NextFunction) => {
    if (err instanceof BaseError) {
      return res.status(err.statusCode).json({
        statusCode: err.statusCode,
        message: err.message,
      });
    }
    res.status(500).json({
      statusCode: 500,
      message: "Internal Server Error",
    });
  });
};

export const errorHandlerWrapper = (fnHandler: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      Promise.resolve(fnHandler(req, res, next));
    } catch (err) {
      next(err);
    }
  };
};
