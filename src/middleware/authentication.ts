import { NextFunction, Response } from "express";
import { UserRequest } from "../@types/middlewares/UserRequest";
import { verifyToken } from "../utils/token";

export const authentication = (request: UserRequest, response: Response, next: NextFunction) => {
  const authorization = request.headers.authorization;
  
  if (!authorization) {
    throw new Error();
  }

  try {
    const user = verifyToken(authorization);
    request.user = user
  } catch (error) {
    throw new Error();
  }

  next();
}
