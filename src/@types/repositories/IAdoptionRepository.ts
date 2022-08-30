import { Repository } from "typeorm";
import { Adoption } from "../../models/Adoption";

export interface IAdoptionRepository extends Repository<Adoption> {}
