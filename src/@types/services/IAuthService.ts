import {
  AuthenticateDto,
  AuthenticateReturnDto,
  CreateUserDto,
  ForgotPasswordDto,
  ResetPasswordDto,
} from "../dtos/authDto";

export interface IAuthService {
  createUser(userData: CreateUserDto): Promise<AuthenticateReturnDto>;
  authenticate(
    userCredentials: AuthenticateDto
  ): Promise<AuthenticateReturnDto>;
  forgotPassword(email: ForgotPasswordDto): Promise<void>;
  resetPassword(resetPassword: ResetPasswordDto): Promise<void>;
}
