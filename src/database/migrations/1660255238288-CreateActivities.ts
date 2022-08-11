import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateActivities1660255238288 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(new Table(
      {
        name: "activities",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "caretaker_id",
            type: "varchar",
          },
          {
            name: "pet_id",
            type: "varchar",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
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
            columnNames: ["caretaker_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
          },
          {
            columnNames: ["pet_id"],
            referencedTableName: "pets",
            referencedColumnNames: ["id"],
          },
        ],
      }
    ))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("activities")
  }

}
