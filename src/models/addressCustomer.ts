import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";

export class addressCustomer {
  @PrimaryColumn("int", { name: "address_id" })
  addressId: number;

  @PrimaryColumn("int", { name: "customer_id" })
  customerId: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt: number;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: number;
}
