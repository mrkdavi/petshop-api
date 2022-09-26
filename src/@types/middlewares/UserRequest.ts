import { Request } from "express";
import { UserTokenDto } from "../dtos/authDto";

export interface UserRequest extends Request {
  user: UserTokenDto;
}