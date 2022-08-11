import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { uuidGenerator } from "../utils/uuidGenerator";
import { AddressUser } from "./addressUsers";

@Entity("addresses")
export class Address {
  @PrimaryColumn()
  id: string;

  @Column()
  district: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column({ nullable: true })
  complement?: string;

  @Column({ nullable: true })
  nickname?: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @OneToOne(() => AddressUser, (addressUser) => addressUser.address)
  user: AddressUser;

  constructor() {
    if (!this.id) {
      this.id = uuidGenerator();
    }
  }
}
