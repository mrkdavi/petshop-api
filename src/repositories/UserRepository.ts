import { EntityRepository, Repository } from "typeorm";
import { IUserRepository } from "../@types/repositories/IUserRepository";
import { User } from "../models/User";

@EntityRepository(User)
export class UserRepository
extends Repository<User>
implements IUserRepository {}
