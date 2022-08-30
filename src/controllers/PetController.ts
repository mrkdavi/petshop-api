import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import { CreatePetDto } from "../@types/dtos/petDto";
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
  async adopt(req: Request, res: Response) {
    const { id } = req.params;
    // const { userId } = req.user;
    const adoptData = {
      petId: id,
      // TODO: get user id from token
      userId: 'ID here!',
    }
    const adoption = await this.petService.adopt(adoptData);
  }
  async listActivities(req: Request, res: Response) {
    const { id } = req.params;
    const activities = await this.petService.listActivities(id);
    res.json(activities);
  }
  async createActivity(req: Request, res: Response) {
    const { id } = req.params;
    // const { userId } = req.user;
    const activityData = {
      petId: id,
      // TODO: get user id from token
      userId: 'ID here!',
      ...req.body,
    }
    return this.petService.createActivity(activityData);
  }
}