import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./Address";
import { User } from "./User";

@Entity("address_users")
export class AddressUser {
  @PrimaryColumn({ name: "user_id" })
  userId: number;
  
  @PrimaryColumn({ name: "address_id" })
  addressId: number;
  
  @ManyToOne(() => User, (user) => user.addresses)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToOne(() => Address)
  @JoinColumn({ name: "address_id" })
  address: Address;

  @CreateDateColumn({ name: "created_at" })
  createdAt: number;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: number;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;
}
