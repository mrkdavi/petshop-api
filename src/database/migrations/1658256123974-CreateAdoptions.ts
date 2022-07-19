import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAdoptions1658256123974 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "adoptions",
              columns: [
                {
                  name: "pet_id",
                  type: "int",
                  isPrimary: true,
                },
                {
                  name: "customer_id",
                  type: "int",
                  isPrimary: true,
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
              ],
              foreignKeys: [
                {
                  columnNames: ["pet_id"],
                  referencedTableName: "pets",
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
        queryRunner.dropTable("adoptions")
    }

}
