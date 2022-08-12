import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { uuidGenerator } from "../utils/uuidGenerator";
import { Activity } from "./Activity";
import { User } from "./user";

@Entity("pets")
export class Pet {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({name: "birth_date", nullable: true})
  birthDate?: Date;

  @Column()
  specie: string;
  
  @Column({nullable: true})
  race?: string;

  @Column()
  size: string;

  @Column()
  sex: string;

  @OneToOne(() => User, (user) => user.pets)
  @JoinColumn({ name: "owner_id" })
  owner?: User;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @OneToMany(() => Activity, (activity) => activity.pet)
  activities: Activity[];

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidGenerator();
    }
  }
}
