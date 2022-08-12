import { Repository } from "typeorm";
import { Address } from "../../models/address";

export interface IAddressRepository extends Repository<Address> {}