import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAddress1657808036611 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "address",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
            isGenerated: true,
          },
          {
            name: "district",
            type: "varchar(255)",
          },
          {
            name: "street",
            type: "varchar(255)",
          },
          {
            name: "number",
            type: "int",
          },
          {
            name: "complemente",
            type: "varchar(255)",
            isNullable: true,
          },
          {
            name: "nickname",
            type: "varchar(255)",
            isNullable: true,
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
    await queryRunner.dropTable("address");
  }
}
