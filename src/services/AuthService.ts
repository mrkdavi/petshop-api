import { Inject, Service } from "typedi";
import { IUserRepository } from "../@types/repositories/IUserRepository";
import { IAuthService } from "../@types/services/IAuthService";

@Service("AuthService")
export class AuthService implements IAuthService {
  constructor(
    @Inject("UserRepository") private readonly userRepository: IUserRepository
  ) {}

  async authenticate() {
    // TODO: Implement
    return { token: "token" };
  }

  async createUser() {
    // TODO: Implement
    return { token: "token" };
  }

  async forgotPassword() {
    // TODO: Implement
  }

  async resetPassword() {
    // TODO: Implement
  }
}
