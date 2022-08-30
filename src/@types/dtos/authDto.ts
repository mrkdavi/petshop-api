export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
}

export interface AuthenticateDto {
  email: string;
  password: string;
}

export interface AuthenticateReturnDto {
  token: string;
}

export interface ForgotPasswordDto {
  email: string;
}

export interface ResetPasswordDto {
  password: string;
  code: string;
}

export interface UserTokenDto {
  id: string;
  role: string;
}
