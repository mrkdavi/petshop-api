import { EntityRepository, Repository } from "typeorm";
import { IPetRepository } from "../@types/repositories/IPetRepository";
import { Pet } from "../models/Pet";

@EntityRepository(Pet)
export class PetRepository
extends Repository<Pet>
implements IPetRepository {}
