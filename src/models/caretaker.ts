import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./address";
import { Pet } from "./pet";

@Entity("caretakers")
export class Caretaker {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column()
  birthday: Date;

  @Column({ length: 255 })
  phone: string;

  @Column({ length: 255 })
  specialty: string;

  @OneToOne(() => Address)
  @JoinColumn({ name: "address_id" })
  address: Address;

  @OneToMany(() => Pet, (pet) => pet.caretaker)
  pets: Pet[];

  @CreateDateColumn({ name: "created_at" })
  createdAt: number;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: number;

  constructor(
    id: number,
    name: string,
    birthday: Date,
    phone: string,
    specialty: string
  ) {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.phone = phone;
    this.specialty = specialty;
  }
}
