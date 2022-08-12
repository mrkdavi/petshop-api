import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePets1657810524254 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "pets",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "birth_date",
            type: "date",
            isNullable: true,
          },
          {
            name: "specie",
            type: "varchar",
          },
          {
            name: "race",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "size",
            type: "varchar",
          },
          {
            name: "sex",
            type: "varchar",
          },
          {
            name: "owner_id",
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
        foreignKeys: [
          {
            columnNames: ["owner_id"],
            referencedTableName: "users",
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
