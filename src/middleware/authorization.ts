import { NextFunction, Response } from "express";
import { UserRequest } from "../@types/middlewares/UserRequest";

import Forbidden from "../@types/errors/Forbidden";
import { Roles } from "../@types/middlewares/Roles";

export const authorization = (roles = []) =>
  (request: UserRequest, _response: Response, next: NextFunction) => {
    const { user: { role } } = request;

    if (!roles.length) {
      return next();
    }

    console.log('role', role);
    console.log('roles', roles);
    console.log(roles.includes(role));

    if (!roles.includes(role)) {
      throw new Forbidden();
    }

    next();
  }
