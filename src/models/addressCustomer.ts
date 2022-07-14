import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./address";
import { Customer } from "./customer";

@Entity("addres_customers")
export class AddressCustomer {
  @PrimaryColumn("int", { name: "address_id" })
  addressId: number;

  @PrimaryColumn("int", { name: "customer_id" })
  customerId: number;

  @ManyToOne(() => Address, (address) => address.addressCustomers)
  @JoinColumn({ name: "address_id" })
  address: Address;

  @ManyToOne(() => Customer, (customer) => customer.addressCustomers)
  @JoinColumn({ name: "customer_id" })
  customer: Customer;

  @CreateDateColumn({ name: "created_at" })
  createdAt: number;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: number;
}
