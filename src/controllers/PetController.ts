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
  async create(req: TypedRequest<CreatePetDto>, res: Response) {
    const { body } = req;
    const pet = await this.petService.create(body);
    res.json(pet);
  }
  async findAll(req: Request, res: Response) {
    const { query } = req;
    const pets = await this.petService.findAll(query);
    res.json(pets);
  }
  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const pet = await this.petService.findById(id);
    res.json(pet);
  }
  async update(req: TypedRequest<Pet>, res: Response) {
    const { id } = req.params;
    const { body } = req;
    const pet = await this.petService.update(id, body);
    res.json(pet);
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this.petService.delete(id);
    res.status(204).send();
  }
  async adopt(req: UserRequest, res: Response) {
    const { id: petId } = req.params;
    const { id: userId } = req.user;
    const adoptData = {
      petId,
      userId,
    };
    const adoption = await this.petService.adopt(adoptData);
    res.status(201).json(adoption);
  }
  async listActivities(req: Request, res: Response) {
    const { id } = req.params;
    const activities = await this.petService.listActivities(id);
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