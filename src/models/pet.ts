import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("pets")
export class pet {
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

  @Column({ name: "customer_id" })
  customerId?: number;
  
  @Column({ name: "caretaker_id" })
  caretakerId: number;

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
