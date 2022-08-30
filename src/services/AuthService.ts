import { plainToInstance } from "class-transformer";
import { token } from "morgan";
import { Inject, Service } from "typedi";
import {
  CreateUserDto,
  AuthenticateReturnDto,
  AuthenticateDto,
  ForgotPasswordDto,
  ResetPasswordDto,
} from "../@types/dtos/authDto";
import { IUserRepository } from "../@types/repositories/IUserRepository";
import { IAuthService } from "../@types/services/IAuthService";
import { User } from "../models/User";
import { hashPassword } from "../utils/hashPassword";
import { generateToken } from "../utils/token";

@Service("AuthService")
export class AuthService implements IAuthService {
  constructor(
    @Inject("UserRepository") private readonly userRepository: IUserRepository
  ) {}

  async createUser(userData: CreateUserDto): Promise<AuthenticateReturnDto> {
    const role = "customer";

    const user = this.userRepository.findOne({
      where: { email: userData.email },
    });

    if (user) {
      throw new Error("User already exists");
    }

    userData.password = hashPassword(userData.password);

    const createdUser = await this.userRepository.save(
      plainToInstance(User, { ...userData, role })
    );

    return generateToken({ id: createdUser.id, role: createdUser.role });
  }

  async authenticate(userCredentials: AuthenticateDto): Promise<AuthenticateReturnDto> {
    const hashedPassword = hashPassword(userCredentials.password);
    const user = await this.userRepository.findOne({
      where: { email: userCredentials.email, password: hashedPassword },
    });

    if (!user) {
      throw new Error("Email or password is incorrect");
    }

    return generateToken({ id: user.id, role: user.role });
  }

  async forgotPassword(email: ForgotPasswordDto): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async resetPassword(resetPassword: ResetPasswordDto): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
