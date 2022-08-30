import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { uuidGenerator } from "../utils/uuidGenerator";
import { Pet } from "./Pet";
import { User } from "./User";

@Entity("adoptions")
export class Adoption {
  @PrimaryColumn()
  id: string;

  @OneToOne(() => Pet)
  @JoinColumn({ name: "pet_id" })
  pet: Pet;

  @ManyToOne(() => User, (user) => user.adoptions)
  @JoinColumn({ name: "owner_id" })
  owner: User;

  @CreateDateColumn({ name: "adopted_at" })
  adoptedAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidGenerator();
    }
  }
}
