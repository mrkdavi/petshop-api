import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { AddressCustomer } from "./addressCustomer";
import { Adoption } from "./adoption";
import { Pet } from "./pet";

@Entity("customers")
export class Customer {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column()
  birthday: Date;

  @Column({ length: 255 })
  phone: string;

  @Column({ name: "is_owner" })
  isOwner: boolean;

  @OneToMany(() => Pet, (pet) => pet.owner)
  pets?: Pet[];

  @OneToMany(
    () => AddressCustomer,
    (addressCustomer) => addressCustomer.customer
  )
  addressCustomers: AddressCustomer[];

  @OneToMany(() => Adoption, (adoption) => adoption.customer)
  adoptions: Adoption[];

  @CreateDateColumn({ name: "created_at" })
  createdAt: number;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: number;

  constructor(
    id: number,
    name: string,
    birthday: Date,
    phone: string,
    isOwner: boolean
  ) {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.phone = phone;
    this.isOwner = isOwner;
  }
}
