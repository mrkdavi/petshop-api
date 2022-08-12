import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import { CreatePetDto } from "../@types/dtos/petDto";
import { TypedRequest } from "../@types/request/TypedRequest";
import { IPetService } from "../@types/services/IPetService";
import { Pet } from "../models/pet";

@Service('PetController')
export class PetController {
  constructor(@Inject('PetService') private petService:   IPetService) {}
  async create(req: TypedRequest<CreatePetDto>, res: Response) {
    const { body } = req;
    const pet = await this.petService.create(body);
    res.json(pet);
  }
  async findAll(req: Request, res: Response) {
    const pets = await this.petService.findAll();
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
}