import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAddress1657808036611 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "addresses",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "district",
            type: "varchar",
          },
          {
            name: "street",
            type: "varchar",
          },
          {
            name: "number",
            type: "int",
          },
          {
            name: "complement",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "nickname",
            type: "varchar",
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
          {
            name: "deleted_at",
            type: "timestamp",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("addresses");
  }
}
