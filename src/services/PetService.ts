import { plainToInstance } from "class-transformer";
import { Inject, Service } from "typedi";
import { CreatePetDto } from "../@types/dtos/petDto";
import { IPetRepository } from "../@types/repositories/IPetRepository";
import { IPetService } from "../@types/services/IPetService";
import { Pet } from "../models/pet";

@Service("PetService")
export class PetService implements IPetService {
  constructor(@Inject('PetRepository') private petRepository: IPetRepository) {}

  async findAll(): Promise<Pet[]> {
    return this.petRepository.find();
  }

  async findById(id: string): Promise<Pet> {
    return this.petRepository.findOne(id);
  }

  async create(pet: CreatePetDto): Promise<Pet> {
    return this.petRepository.save(plainToInstance(Pet, pet));
  }

  async update(id: string, petData: Pet): Promise<Pet> {
    const pet = await this.petRepository.findOne(id);

    if(!pet) {
      throw new Error("Pet not found");
    }

    return this.petRepository.save(plainToInstance(Pet, { ...pet, ...petData }));
  }

  async delete(id: string): Promise<void> {
    const pet = await this.petRepository.findOne(id);

    if(!pet) {
      throw new Error("Pet not found");
    }
    
    await this.petRepository.softDelete(id);
  }
}