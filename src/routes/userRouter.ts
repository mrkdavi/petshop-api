import { Router } from "express"
import Container from "typedi";
import { UserController } from "../controllers/UserController";
import { authentication } from "../middleware/authentication";

const router = Router();

const getController = (): UserController => {
  return Container.get<UserController>("UserController");
}

const createUserRouter = () => {
  router.get('/', authentication, (req, res) => getController().findAll(req, res));
  router.get('/:id', authentication, (req, res) => getController().findOne(req, res));
  router.post('/', authentication, (req, res) => getController().create(req, res));
  router.put('/:id', authentication, (req, res) => getController().update(req, res));
  router.delete('/:id', authentication, (req, res) => getController().delete(req, res));
  
  return router;
}

export default createUserRouter;