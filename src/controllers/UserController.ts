import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import { CreateUserDto } from "../@types/dtos/userDto";
import { TypedRequest } from "../@types/request/TypedRequest";
import { IUserService } from "../@types/services/IUserService";
import { User } from "../models/user";

@Service('UserController')
export class UserController {
  constructor(@Inject('UserService') private userService:   IUserService) {}
  async create(req: TypedRequest<CreateUserDto>, res: Response) {
    const { body } = req;
    const user = await this.userService.create(body);
    res.json(user);
  }
  async findAll(req: Request, res: Response) {
    const users = await this.userService.findAll();
    res.json(users);
  }
  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const user = await this.userService.findById(id);
    res.json(user);
  }
  async update(req: TypedRequest<User>, res: Response) {
    const { id } = req.params;
    const { body } = req;
    const user = await this.userService.update(id, body);
    res.json(user);
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this.userService.delete(id);
    res.status(204).send();
  }
}