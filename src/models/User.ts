import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { uuidGenerator } from "../utils/uuidGenerator";
import { Activity } from "./Activity";
import { AddressUser } from "./AddressUsers";
import { Adoption } from "./Adoption";
import { Pet } from "./Pet";

@Entity("users")
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ name: "birth_date", nullable: true })
  birthDate?: Date;

  @Column({ nullable: true })
  phone?: string;

  @Column()
  role: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @OneToMany(() => Pet, (pet) => pet.owner)
  pets: Pet[];

  @OneToMany(() => Adoption, (adoption) => adoption.owner)
  adoptions: Adoption[];

  @OneToMany(() => AddressUser, (address) => address.user)
  addresses: AddressUser[];

  @OneToMany(() => Activity, (activity) => activity.caretaker)
  activities: Activity[];

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidGenerator();
    }
  }
}
