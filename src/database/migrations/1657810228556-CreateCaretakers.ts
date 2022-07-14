import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCaretakers1657810228556 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "caretakers",
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
            name: "specialty",
            type: "varchar(255)",
          },
          {
            name: "address_id",
            type: "int",
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
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("caretakers");
  }
}
