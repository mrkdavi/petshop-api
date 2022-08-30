import { sign, verify } from "jsonwebtoken";
import { AuthenticateReturnDto, UserTokenDto } from "../@types/dtos/authDto";

export const verifyToken = (token: string): UserTokenDto => {
  const { AUTH_SECRET } = process.env;
  return verify(token, AUTH_SECRET) as UserTokenDto;
}
export const generateToken = (user: UserTokenDto): AuthenticateReturnDto => {
  const token = sign(user, process.env.AUTH_SECRET);
  return { token };
}
