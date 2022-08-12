import { Pet } from "../../models/pet";
import { CreatePetDto } from "../dtos/petDto";

export interface IPetService {
  create(pet: CreatePetDto): Promise<Pet>;
  findAll(): Promise<Pet[]>;
  findById(id: string): Promise<Pet>;
  update(id: string, pet: Pet): Promise<Pet>;
  delete(id: string): Promise<void>;
}