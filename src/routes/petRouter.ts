import { Router } from "express";
import Container from "typedi";
import { CreatePetDto } from "../@types/dtos/petDto";
import { Roles } from "../@types/middlewares/Roles";
import { UserRequest } from "../@types/middlewares/UserRequest";
import { TypedRequest } from "../@types/request/TypedRequest";
import { PetController } from "../controllers/PetController";
import { authentication } from "../middleware/authentication";
import { authorization } from "../middleware/authorization";
import { errorHandlerWrapper } from "../middleware/errorHandler";

const router = Router();

const getController = (): PetController => {
  return Container.get<PetController>("PetController");
};

router.use(authentication);

const createPetRouter = () => {
  router.patch(
    "/:id/adopt",
    errorHandlerWrapper((req: UserRequest, res) => getController().adopt(req, res))
  );
  router.get(
    "/adoption",
    errorHandlerWrapper((req, res) => getController().findAllPublic(req, res))
  );
  router.get(
    "/",
    authorization([Roles.EMPLOYEE, Roles.ADMIN]),
    errorHandlerWrapper((req, res) => getController().findAllPrivate(req, res))
  );
  router.post(
    "/",
    errorHandlerWrapper((req: UserRequest, res) => getController().create(req, res))
  );
  router.get(
    "/adoption/:id",
    errorHandlerWrapper((req, res) => getController().findOnePublic(req, res))
  );
  router.get(
    "/:id",
    authorization([Roles.EMPLOYEE, Roles.ADMIN]),
    errorHandlerWrapper((req, res) => getController().findOnePrivate(req, res))
  );
  router.put(
    "/:id",
    authorization([Roles.ADMIN]),
    errorHandlerWrapper((req: UserRequest, res) => getController().update(req, res))
  );
  router.delete(
    "/:id",
    authorization([Roles.ADMIN]),
    errorHandlerWrapper((req: UserRequest, res) => getController().delete(req, res))
  );

  return router;
};

export default createPetRouter;
