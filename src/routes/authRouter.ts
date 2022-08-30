import { Router } from "express"
import Container from "typedi";
import { AuthController } from "../controllers/AuthController";

const router = Router();

const getController = (): AuthController => {
  return Container.get<AuthController>("AuthController");
}

const createAuthRouter = () => {
  router.post('/login', (req, res) => getController().login(req, res));
  router.post('/signup', (req, res) => getController().signup(req, res));
  router.post('/forgot', (req, res) => getController().forgot(req, res));
  router.post('/reset', (req, res) => getController().reset(req, res));
  
  return router;
}

export default createAuthRouter;