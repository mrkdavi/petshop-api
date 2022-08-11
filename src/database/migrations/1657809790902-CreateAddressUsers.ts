import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAddressUsers1657809790902 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "address_users",
        columns: [
          {
            name: "address_id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "varchar",
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
          {
            name: "deleted_at",
            type: "timestamp",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ["address_id"],
            referencedTableName: "addresses",
            referencedColumnNames: ["id"],
          },
          {
            columnNames: ["user_id"],
            referencedTableName: "users",
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
