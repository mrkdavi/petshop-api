import { NextFunction, Response } from "express";
import { UserRequest } from "../@types/middlewares/UserRequest";
import { verifyToken } from "../utils/token";

import Unauthorized from "../@types/errors/Unauthorized";

export const authentication = (request: UserRequest, _response: Response, next: NextFunction) => {
  const { headers: { authorization } } = request;

  if (!authorization) {
    throw new Unauthorized();
  }

  try {
    const user = verifyToken(authorization);
    request.user = user
  } catch (error) {
    throw new Unauthorized();
  }

  next();
}
