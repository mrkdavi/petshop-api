import { plainToInstance } from "class-transformer";
import { Inject, Service } from "typedi";
import { CreateUserDto } from "../@types/dtos/userDto";
import NotFound from "../@types/errors/NotFound";
import { IUserRepository } from "../@types/repositories/IUserRepository";
import { IUserService } from "../@types/services/IUserService";
import { User } from "../models/User";

@Service("UserService")
export class UserService implements IUserService {
  constructor(
    @Inject("UserRepository")
    private readonly userRepository: IUserRepository
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users.map((user) => {
      delete user.password;
      return user;
    })
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);
    delete user.password;
    return user;
  }

  async create(user: CreateUserDto): Promise<User> {
    return this.userRepository.save(plainToInstance(User, user));
  }

  async update(id: string, userData: User): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFound("User not found");
    }

    return this.userRepository.save(
      plainToInstance(User, { ...user, ...userData })
    );
  }

  async delete(id: string): Promise<void> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFound("User not found");
    }

    await this.userRepository.softDelete(id);
  }
}
