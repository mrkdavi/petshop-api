import { EntityRepository, Repository } from "typeorm";
import { IAdoptionRepository } from "../@types/repositories/IAdoptionRepository";
import { Adoption } from "../models/Adoption";

@EntityRepository(Adoption)
export class AdoptionRepository
extends Repository<Adoption>
implements IAdoptionRepository {}
