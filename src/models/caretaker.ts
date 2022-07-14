import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("caretakers")
export class caretakers {
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

  @Column({ name: "address_id" })
  AddressId: number;

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
