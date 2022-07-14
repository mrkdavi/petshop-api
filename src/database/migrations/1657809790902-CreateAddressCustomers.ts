import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAddressCustomers1657809790902 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "address_customers",
        columns: [
          {
            name: "address_id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "customer_id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["address_id"],
            referencedTableName: "address",
            referencedColumnNames: ["id"],
          },
          {
            columnNames: ["customer_id"],
            referencedTableName: "customers",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("address_customers");
  }
}
