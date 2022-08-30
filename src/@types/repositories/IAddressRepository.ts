import { Repository } from "typeorm";
import { Address } from "../../models/Address";

export interface IAddressRepository extends Repository<Address> {}