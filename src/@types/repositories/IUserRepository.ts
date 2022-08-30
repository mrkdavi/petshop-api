import { Repository } from "typeorm";
import { User } from "../../models/User";

export interface IUserRepository extends Repository<User> {}
