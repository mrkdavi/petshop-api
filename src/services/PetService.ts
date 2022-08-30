import { plainToInstance } from "class-transformer";
import { Inject, Service } from "typedi";
import {
  CreatePetDto,
  PetActivityDto,
  PetAdoption,
  PetQueryDto,
} from "../@types/dtos/petDto";
import { IActivityRepository } from "../@types/repositories/IActivityRepository";
import { IPetRepository } from "../@types/repositories/IPetRepository";
import { IUserRepository } from "../@types/repositories/IUserRepository";
import { IPetService } from "../@types/services/IPetService";
import { Activity } from "../models/Activity";
import { Adoption } from "../models/Adoption";
import { Pet } from "../models/Pet";

@Service("PetService")
export class PetService implements IPetService {
  constructor(
    @Inject("PetRepository")
    private readonly petRepository: IPetRepository,
    @Inject("ActivityRepository")
    private readonly activityRepository: IActivityRepository,
    @Inject("UserRepository")
    private readonly userRepository: IUserRepository
  ) {}

  async findAll(petQuery?: PetQueryDto): Promise<Pet[]> {
    return this.petRepository.find({ where: petQuery });
  }

  async findById(id: string): Promise<Pet> {
    return this.petRepository.findOne(id);
  }

  async create(pet: CreatePetDto): Promise<Pet> {
    return this.petRepository.save(plainToInstance(Pet, pet));
  }

  async update(id: string, petData: Pet): Promise<Pet> {
    const pet = await this.petRepository.findOne(id);

    if (!pet) {
      throw new Error("Pet not found");
    }

    return this.petRepository.save(
      plainToInstance(Pet, { ...pet, ...petData })
    );
  }

  async delete(id: string): Promise<void> {
    const pet = await this.petRepository.findOne(id);

    if (!pet) {
      throw new Error("Pet not found");
    }

    await this.petRepository.softDelete(id);
  }

  async adopt(adoptionData: PetAdoption): Promise<Adoption> {
    const pet = await this.petRepository.findOne(adoptionData.petId);
    const owner = await this.userRepository.findOne(adoptionData.userId);

    if (!pet) {
      throw new Error("Pet not found");
    }

    if (pet.owner) {
      throw new Error("Pet already adopted");
    }

    return this.petRepository.save(plainToInstance(Adoption, { pet, owner }));
  }

  async listActivities(id: string): Promise<Activity[]> {
    const pet = await this.petRepository.findOne(id);

    if (!pet) {
      throw new Error("Pet not found");
    }

    return this.activityRepository.find({ where: { pet } });
  }

  async createActivity(activityData: PetActivityDto): Promise<Activity> {
    const pet = await this.petRepository.findOne(activityData.petId);
    const caretaker = await this.userRepository.findOne(activityData.userId);

    return this.activityRepository.save(
      plainToInstance(Activity, { ...activityData, pet, caretaker })
    );
  }
}
