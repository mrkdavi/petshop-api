import { Pet } from "../../models/Pet";
import { Activity } from "../../models/Activity";
import { Adoption } from "../../models/Adoption";
import { CreatePetDto, PetActivityDto, PetAdoption, PetQueryDto } from "../dtos/petDto";

export interface IPetService {
  create(pet: CreatePetDto): Promise<Pet>;
  findAll(petQuery?: PetQueryDto): Promise<Pet[]>;
  findById(id: string): Promise<Pet>;
  update(id: string, pet: Pet): Promise<Pet>;
  delete(id: string): Promise<void>;
  adopt(adoptionData: PetAdoption): Promise<Adoption>;
  listActivities(id: string): Promise<Activity[]>;
  createActivity(activityData: PetActivityDto): Promise<Activity>;
}