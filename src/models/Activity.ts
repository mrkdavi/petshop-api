import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  DeleteDateColumn,
} from "typeorm";
import { Pet } from "./Pet";
import { User } from "./User";

@Entity("activities")
export class Activity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne(() => User, (user) => user.activities)
  @JoinColumn({ name: "caretaker_id" })
  caretaker: User;

  @ManyToOne(() => Pet, (pet) => pet.activities)
  @JoinColumn({ name: "pet_id" })
  pet: Pet;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;
}
