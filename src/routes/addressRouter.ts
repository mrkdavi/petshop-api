import { Router } from "express"
import Container from "typedi";
import { AddressController } from "../controllers/AddressController";
import { authentication } from "../middleware/authentication";
import { errorHandlerWrapper } from "../middleware/errorHandler";

const router = Router();

const getController = (): AddressController => {
  return Container.get<AddressController>("AddressController");
}

const createAddressRouter = () => {
  router.get('/', authentication, errorHandlerWrapper((req, res) => getController().findAll(req, res)));
  router.get('/:id', authentication, errorHandlerWrapper((req, res) => getController().findOne(req, res)));
  router.post('/', authentication, errorHandlerWrapper((req, res) => getController().create(req, res)));
  router.put('/:id', authentication, errorHandlerWrapper((req, res) => getController().update(req, res)));
  router.delete('/:id', authentication, errorHandlerWrapper((req, res) => getController().delete(req, res)));
  
  return router;
}

export default createAddressRouter;