import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Caretaker } from "./caretaker";
import { Customer } from "./customer";

@Entity("pets")
export class Pet {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column()
  birthday: Date;

  @Column({ length: 30 })
  specie: string;
  
  @Column({ length: 30 })
  race: string;

  @Column({ length: 30 })
  size: string;

  @Column({ length: 10 })
  sex: string;

  @ManyToOne(() => Customer, (customer) => customer)
  @JoinColumn({ name: "customer_id" })
  owner?: Customer

  @ManyToOne(() => Caretaker, (caretaker) => caretaker.pets)
  @JoinColumn({ name: "caretaker_id" })
  caretaker: Caretaker

  @CreateDateColumn({ name: "created_at" })
  createdAt: number;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: number;

  constructor(
    id: number,
    name: string,
    birthday: Date,
    specie: string,
    race: string,
    size: string,
    sex: string
  ) {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.specie = specie;
    this.specie = specie;
    this.race = race;
    this.race = race;
    this.size = size;
    this.sex = sex;
  }
}
