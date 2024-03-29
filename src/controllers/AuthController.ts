import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import { CreateUserDto } from "../@types/dtos/userDto";
import { TypedRequest } from "../@types/request/TypedRequest";
import { IAuthService } from "../@types/services/IAuthService";

@Service('AuthController')
export class AuthController {
  constructor(@Inject('AuthService') private authService: IAuthService) {}
  
  async login(req: Request, res: Response) {
    const email = req.header('email');
    const password = req.header('password');
    console.log(req.headers);
    const token = await this.authService.authenticate({email, password});
    res.json(token);
  }

  async signup(req: TypedRequest<CreateUserDto>, res: Response) {
    const { body } = req;
    const token = await this.authService.createUser(body);
    res.json(token);
  }

  async forgot(req: Request, res: Response) {
    const { body } = req;
    await this.authService.forgotPassword(body);
    res.status(204).send();
  }

  async reset(req: Request, res: Response) {
    const { body } = req;
    await this.authService.resetPassword(body);
    res.status(204).send();
  }
}