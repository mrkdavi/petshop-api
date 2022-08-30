import { EntityRepository, Repository } from "typeorm";
import { Address } from "../models/Address";
import { IAddressRepository } from "../@types/repositories/IAddressRepository";

@EntityRepository(Address)
export class AddressRepository
  extends Repository<Address>
  implements IAddressRepository {}
