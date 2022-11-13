import { Pet } from "../../models/Pet";
import { Activity } from "../../models/Activity";
import { Adoption } from "../../models/Adoption";
import { CreatePetDto, PetActivityDto, PetAdoption, PetQueryDto } from "../dtos/petDto";
import { UserTokenDto } from "../dtos/authDto";

export interface IPetService {
  create(petData: CreatePetDto, user: UserTokenDto): Promise<Pet>;
  findAll(petQuery?: PetQueryDto): Promise<Pet[]>;
  findById(id: string, petQuery?: PetQueryDto): Promise<Pet>;
  update(id: string, pet: Pet, user: UserTokenDto): Promise<Pet>;
  delete(id: string, user: UserTokenDto): Promise<void>;
  adopt(adoptionData: PetAdoption): Promise<Adoption>;
  listActivities(id: string, user: UserTokenDto): Promise<Activity[]>;
  createActivity(activityData: PetActivityDto): Promise<Activity>;
}