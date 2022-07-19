import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Pet } from "./pet";
import { Customer } from "./customer";

@Entity("adoptions")
export class Adoption {
  @PrimaryColumn("int", { name: "pet_id" })
  petId: number;

  @PrimaryColumn("int", { name: "customer_id" })
  customerId: number;

  @OneToOne(() => Pet)
  @JoinColumn({ name: "pet_id" })
  pet: Pet;

  @ManyToOne(() => Customer, (customer) => customer.adoptions)
  @JoinColumn({ name: "customer_id" })
  customer: Customer;

  @CreateDateColumn({ name: "adopted_at" })
  adoptedAt: number;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: number;
}
