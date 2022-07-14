import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePets1657810524254 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "pets",
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
            name: "specie",
            type: "varchar(30)",
          },
          {
            name: "race",
            type: "varchar(30)",
            isNullable: true,
          },
          {
            name: "size",
            type: "varchar(30)",
          },
          {
            name: "sex",
            type: "varchar(10)",
          },
          {
            name: "customer_id",
            type: "int",
            isNullable: true,
          },
          {
            name: "caretaker_id",
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
            columnNames: ["customer_id"],
            referencedTableName: "customers",
            referencedColumnNames: ["id"],
          },
          {
            columnNames: ["caretaker_id"],
            referencedTableName: "caretakers",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("pets");
  }
}
