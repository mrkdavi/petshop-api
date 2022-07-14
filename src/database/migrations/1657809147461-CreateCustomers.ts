import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCustomers1657809147461 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "customers",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
            isGenerated: true,
          },
          {
            name: "name",
            type: "varchar(255)",
          },
          {
            name: "birthday",
            type: "date",
          },
          {
            name: "phone",
            type: "varchar(255)",
            isUnique: true,
          },
          {
            name: "is_owner",
            type: "bool",
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("customers")
  }
}
