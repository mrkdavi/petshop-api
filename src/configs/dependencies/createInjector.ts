import Container from "typedi";
import { getCustomRepository } from "typeorm";
import { PetRepository } from "../../repositories/PetRepository";
import { AddressRepository } from "../../repositories/AddressRepository";
import { UserRepository } from "../../repositories/UserRepository";
import { ActivityRepository } from "../../repositories/ActivityRepository";
import { AdoptionRepository } from "../../repositories/AdoptionRepository";

// controllers
import "../../controllers/PetController";
import "../../controllers/UserController";
import "../../controllers/AddressController";
import "../../controllers/AuthController";

// services
import "../../services/PetService";
import "../../services/UserService";
import "../../services/AddressService";
import "../../services/AuthService";

const createDependencyInjector = () => {
  Container.set("PetRepository", getCustomRepository(PetRepository));
  Container.set("UserRepository", getCustomRepository(UserRepository));
  Container.set("AddressRepository", getCustomRepository(AddressRepository));
  Container.set("ActivityRepository", getCustomRepository(ActivityRepository));
  Container.set("AdoptionRepository", getCustomRepository(AdoptionRepository));
};

export default createDependencyInjector;