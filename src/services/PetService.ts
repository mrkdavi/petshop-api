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
import { IAdoptionRepository } from "../@types/repositories/IAdoptionRepository";
import { Activity } from "../models/Activity";
import { Adoption } from "../models/Adoption";
import { Pet } from "../models/Pet";

import NotFound from "../@types/errors/NotFound";
import Conflict from "../@types/errors/Conflict";
import { filterEntity } from "../utils/filterEntity";
import { UserTokenDto } from "../@types/dtos/authDto";
import { Roles } from "../@types/middlewares/Roles";
import BadRequest from "../@types/errors/BadRequest";

@Service("PetService")
export class PetService implements IPetService {
  constructor(
    @Inject("PetRepository")
    private readonly petRepository: IPetRepository,
    @Inject("ActivityRepository")
    private readonly activityRepository: IActivityRepository,
    @Inject("UserRepository")
    private readonly userRepository: IUserRepository,
    @Inject("AdoptionRepository")
    private readonly adoptionRepository: IAdoptionRepository
  ) {}

  async findAll(petQuery?: PetQueryDto): Promise<Pet[]> {
    return this.petRepository.find({ where: petQuery });
  }

  async findById(id: string, petQuery?: PetQueryDto): Promise<Pet> {
    const pet = await this.petRepository.findOne(id, {
      where: petQuery,
      relations: ["owner"],
    });
    if (!pet) {
      throw new NotFound("Pet not found");
    }
    return pet;
  }

  async create(petData: CreatePetDto, user: UserTokenDto): Promise<Pet> {
    if (user.role === Roles.CUSTOMER) {
      petData.owner = user.id;
    }
    return this.petRepository.save(plainToInstance(Pet, petData));
  }

  async update(id: string, petData: Pet, user: UserTokenDto): Promise<Pet> {
    const pet = await this.petRepository.findOne(id, {
      relations: ["owner"],
    });

    if (!pet) {
      throw new NotFound("Pet not found");
    }
    if (user.role === Roles.EMPLOYEE && pet.owner.id !== user.id) {
      throw new NotFound("Pet not found");
    }

    return this.petRepository.save(
      plainToInstance(Pet, { ...pet, ...petData })
    );
  }

  async delete(id: string, user: UserTokenDto): Promise<void> {
    const pet = await this.petRepository.findOne(id, {
      relations: ["owner"],
    });

    if (!pet) {
      throw new NotFound("Pet not found");
    }
    if (user.role === Roles.EMPLOYEE && pet.owner.id !== user.id) {
      throw new NotFound("Pet not found");
    }

    await this.petRepository.softDelete(id);
  }

  async adopt({ petId, userId }: PetAdoption): Promise<Adoption> {
    const pet = await this.petRepository.findOne(petId);
    const owner = await this.userRepository.findOne(userId, {
      relations: ["pets"],
    });

    if (!pet) {
      throw new NotFound("Pet not found");
    }

    if (pet.owner) {
      throw new Conflict("Pet already adopted");
    }

    owner.pets.push(pet);
    await this.userRepository.save(owner);

    const adopt = await this.adoptionRepository.save(
      plainToInstance(Adoption, { pet, owner })
    );

    return filterEntity<Adoption>(adopt, [
      "owner.email",
      "owner.password",
      "owner.pets",
    ]);
  }

  async listActivities(id: string, user: UserTokenDto): Promise<Activity[]> {
    const pet = await this.petRepository.findOne(id, {
      relations: ["owner"],
    });

    if (!pet) {
      throw new NotFound("Pet not found");
    }
    if (user.role === Roles.EMPLOYEE && pet.owner.id !== user.id) {
      throw new NotFound("Pet not found");
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
