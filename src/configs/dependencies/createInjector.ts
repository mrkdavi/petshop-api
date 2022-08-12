import { getCustomRepository } from "typeorm";
import Container from "typedi";
import { PetRepository } from "../../repositories/PetRepository";

// controllers
import "../../controllers/PetController";
import "../../controllers/AddressController";

// services
import "../../services/PetService";
import "../../services/AddressService";
import { AddressRepository } from "../../repositories/AddressRepository";

const createDependencyInjector = () => {
  Container.set("PetRepository", getCustomRepository(PetRepository));
  Container.set("AddressRepository", getCustomRepository(AddressRepository));
};

export default createDependencyInjector;