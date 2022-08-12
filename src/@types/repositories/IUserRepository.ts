import { Repository } from "typeorm";
import { User } from "../../models/user";

export interface IUserRepository extends Repository<User> {}
