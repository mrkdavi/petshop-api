import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import { CreateAddressDto } from "../@types/dtos/addressDto";
import { TypedRequest } from "../@types/request/TypedRequest";
import { IAddressService } from "../@types/services/IAddressService";
import { Address } from "../models/Address";

@Service('AddressController')
export class AddressController {
  constructor(@Inject('AddressService') private addressService:   IAddressService) {}
  async create(req: TypedRequest<CreateAddressDto>, res: Response) {
    const { body } = req;
    const address = await this.addressService.create(body);
    res.json(address);
  }
  async findAll(req: Request, res: Response) {
    const addresss = await this.addressService.findAll();
    res.json(addresss);
  }
  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const address = await this.addressService.findById(id);
    res.json(address);
  }
  async update(req: TypedRequest<Address>, res: Response) {
    const { id } = req.params;
    const { body } = req;
    const address = await this.addressService.update(id, body);
    res.json(address);
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this.addressService.delete(id);
    res.status(204).send();
  }
}