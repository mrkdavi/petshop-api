import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("address")
export class address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 255 })
  district: string;

  @Column({ length: 255 })
  street: string;

  @Column()
  number: number;

  @Column({ nullable: true })
  complement: string;

  @Column({ nullable: true })
  nickname: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: number;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: number;

  constructor(
    id: number,
    district: string,
    street: string,
    number: number,
    complement?: string,
    nickname?: string
  ) {
    this.id = id;
    this.district = district;
    this.street = street;
    this.number = number;
    this.complement = complement;
    this.nickname = nickname;
  }
}
