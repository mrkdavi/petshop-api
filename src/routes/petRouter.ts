import { Router } from "express"
import Container from "typedi";
import { PetController } from "../controllers/PetController";

const router = Router();

const getController = (): PetController => {
  return Container.get<PetController>("PetController");
}

const createPetRouter = () => {
  router.get('/', (req, res) => getController().findAll(req, res));
  router.get('/:id', (req, res) => getController().findOne(req, res));
  router.post('/', (req, res) => getController().create(req, res));
  router.put('/:id', (req, res) => getController().update(req, res));
  router.delete('/:id', (req, res) => getController().delete(req, res));
  
  return router;
}

export default createPetRouter;