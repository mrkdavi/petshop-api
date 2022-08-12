import { User } from "../../models/user";
import { CreateUserDto } from "../dtos/userDto";

export interface IUserService {
  create(user: CreateUserDto): Promise<User>;
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User>;
  update(id: string, user: User): Promise<User>;
  delete(id: string): Promise<void>;
}