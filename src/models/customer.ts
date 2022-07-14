import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export class customer {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column()
  birthday: Date;

  @Column({ length: 255 })
  phone: string;

  @Column({ name: "is_owner" })
  isOwner: boolean;

  @CreateDateColumn({ name: "created_at" })
  createdAt: number;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: number;

  constructor(
    id: number,
    name: string,
    birthday: Date,
    phone: string,
    isOwner: boolean
  ) {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.phone = phone;
    this.isOwner = isOwner;
  }
}
