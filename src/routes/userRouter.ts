import { Router } from "express";
import Container from "typedi";
import { Roles } from "../@types/middlewares/Roles";
import { UserController } from "../controllers/UserController";
import { authentication } from "../middleware/authentication";
import { authorization } from "../middleware/authorization";
import { errorHandlerWrapper } from "../middleware/errorHandler";

const router = Router();

const getController = (): UserController => {
  return Container.get<UserController>("UserController");
};

router.use(authentication);

const createUserRouter = () => {
  router.get(
    "/",
    authorization([Roles.EMPLOYEE, Roles.ADMIN]),
    errorHandlerWrapper((req, res) => getController().findAll(req, res))
  );
  router.get(
    "/:id",
    authorization([Roles.EMPLOYEE, Roles.ADMIN]),
    errorHandlerWrapper((req, res) => getController().findOne(req, res))
  );
  router.post(
    "/",
    authorization([Roles.EMPLOYEE, Roles.ADMIN]),
    errorHandlerWrapper((req, res) => getController().create(req, res))
  );
  router.put(
    "/:id",
    authorization([Roles.EMPLOYEE, Roles.ADMIN]),
    errorHandlerWrapper((req, res) => getController().update(req, res))
  );
  router.delete(
    "/:id",
    authorization([Roles.EMPLOYEE, Roles.ADMIN]),
    errorHandlerWrapper((req, res) => getController().delete(req, res))
  );

  return router;
};

export default createUserRouter;
