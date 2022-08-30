import { Repository } from "typeorm";
import { Pet } from "../../models/Pet";

export interface IPetRepository extends Repository<Pet> {}
