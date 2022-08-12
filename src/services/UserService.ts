import { plainToInstance } from "class-transformer";
import { Inject, Service } from "typedi";
import { CreateUserDto } from "../@types/dtos/userDto";
import { IUserRepository } from "../@types/repositories/IUserRepository";
import { IUserService } from "../@types/services/IUserService";
import { User } from "../models/user";

@Service("UserService")
export class UserService implements IUserService {
  constructor(
    @Inject("UserRepository")
    private readonly userRepository: IUserRepository
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async create(user: CreateUserDto): Promise<User> {
    return this.userRepository.save(plainToInstance(User, user));
  }

  async update(id: string, userData: User): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new Error("User not found");
    }

    return this.userRepository.save(
      plainToInstance(User, { ...user, ...userData })
    );
  }

  async delete(id: string): Promise<void> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new Error("User not found");
    }

    await this.userRepository.softDelete(id);
  }
}
