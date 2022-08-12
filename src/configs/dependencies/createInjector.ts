import { getCustomRepository } from "typeorm";
import Container from "typedi";
import { PetRepository } from "../../repositories/PetRepository";

// controllers
import "../../controllers/PetController";

// services
import "../../services/PetService";

const createDependencyInjector = () => {
  Container.set("PetRepository", getCustomRepository(PetRepository));
};

export default createDependencyInjector;