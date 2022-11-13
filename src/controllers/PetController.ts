import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import { CreatePetDto } from "../@types/dtos/petDto";
import { UserRequest } from "../@types/middlewares/UserRequest";
import { TypedRequest } from "../@types/request/TypedRequest";
import { IPetService } from "../@types/services/IPetService";
import { Pet } from "../models/Pet";

@Service('PetController')
export class PetController {
  constructor(@Inject('PetService') private petService: IPetService) {}
  async create(req: TypedRequest<CreatePetDto> & UserRequest, res: Response) {
    const { body, user } = req;
    const pet = await this.petService.create(body, user);
    res.json(pet);
  }
  async findAllPublic(_req: Request, res: Response) {
    const pets = await this.petService.findAll({ owner : null });
    res.json(pets);
  }
  async findAllPrivate(req: Request, res: Response) {
    const { query } = req;
    const pets = await this.petService.findAll(query);
    res.json(pets);
  }
  async findOnePublic(req: Request, res: Response) {
    const { id } = req.params;
    const pet = await this.petService.findById(id, { owner: null });
    res.json(pet);
  }
  async findOnePrivate(req: Request, res: Response) {
    const { id } = req.params;
    const pet = await this.petService.findById(id);
    res.json(pet);
  }
  async update(req: TypedRequest<Pet> & UserRequest, res: Response) {
    const { body, user, params: { id } } = req;
    const pet = await this.petService.update(id, body, user);
    res.json(pet);
  }
  async delete(req: UserRequest, res: Response) {
    const { id } = req.params;
    const { user } = req;
    await this.petService.delete(id, user);
    res.status(204).send();
  }
  async adopt(req: UserRequest, res: Response) {
    const { id: petId } = req.params;
    const { id: userId } = req.user;
    const adoption = await this.petService.adopt({ petId, userId });
    res.status(200).json(adoption);
  }
  async listActivities(req: UserRequest, res: Response) {
    const { user, params: { id } } = req;
    const activities = await this.petService.listActivities(id, user);
    res.json(activities);
  }
  async createActivity(req: UserRequest, res: Response) {
    const { id: petId } = req.params;
    const { id: userId } = req.user;
    const activityData = {
      petId,
      userId,
      ...req.body,
    }
    const activity = this.petService.createActivity(activityData);
    res.status(201).json(activity);
  }
}