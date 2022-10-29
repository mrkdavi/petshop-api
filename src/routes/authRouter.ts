import { Router } from "express"
import Container from "typedi";
import { AuthController } from "../controllers/AuthController";
import { errorHandlerWrapper } from "../middleware/errorHandler";

const router = Router();

const getController = (): AuthController => {
  return Container.get<AuthController>("AuthController");
}

const createAuthRouter = () => {
  router.post('/login', errorHandlerWrapper((req, res) => getController().login(req, res)));
  router.post('/signup', errorHandlerWrapper((req, res) => getController().signup(req, res)));
  router.post('/forgot', errorHandlerWrapper((req, res) => getController().forgot(req, res)));
  router.post('/reset', errorHandlerWrapper((req, res) => getController().reset(req, res)));
  
  return router;
}

export default createAuthRouter;