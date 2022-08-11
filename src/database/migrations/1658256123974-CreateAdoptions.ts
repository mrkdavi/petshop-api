import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAdoptions1658256123974 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "adoptions",
              columns: [
                {
                  name: "id",
                  type: "varchar",
                  isPrimary: true,
                },
                {
                  name: "pet_id",
                  type: "varchar",
                },
                {
                  name: "owner_id",
                  type: "varchar",
                },
                {
                  name: "adopted_at",
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
                  columnNames: ["pet_id"],
                  referencedTableName: "pets",
                  referencedColumnNames: ["id"],
                },
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
        queryRunner.dropTable("adoptions")
    }

}
