import { Repository } from "typeorm";
import { Pet } from "../../models/pet";

export interface IPetRepository extends Repository<Pet> {}
