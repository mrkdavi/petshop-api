import { plainToInstance } from "class-transformer";
import { Inject, Service } from "typedi";
import { CreateAddressDto } from "../@types/dtos/addressDto";
import { IAddressRepository } from "../@types/repositories/IAddressRepository";
import { Address } from "../models/Address";

@Service("AddressService")
export class AddressService {
  constructor(
    @Inject("AddressRepository")
    private readonly addressRepository: IAddressRepository
  ) {}

  async findAll(): Promise<Address[]> {
    return this.addressRepository.find();
  }

  async findById(id: string): Promise<Address> {
    return this.addressRepository.findOne(id);
  }

  async create(address: CreateAddressDto): Promise<Address> {
    return this.addressRepository.save(plainToInstance(Address, address));
  }

  async update(id: string, addressData: Address): Promise<Address> {
    const address = await this.addressRepository.findOne(id);

    if (!Address) {
      throw new Error("Address not found");
    }

    return this.addressRepository.save(
      plainToInstance(Address, { ...address, ...addressData })
    );
  }

  async delete(id: string): Promise<void> {
    const Address = await this.addressRepository.findOne(id);

    if (!Address) {
      throw new Error("Address not found");
    }

    await this.addressRepository.softDelete(id);
  }
}
