import { Address } from "../../models/Address";
import { CreateAddressDto } from "../dtos/addressDto";

export interface IAddressService {
  create(address: CreateAddressDto): Promise<Address>;
  findAll(): Promise<Address[]>;
  findById(id: string): Promise<Address>;
  update(id: string, address: Address): Promise<Address>;
  delete(id: string): Promise<void>;
}