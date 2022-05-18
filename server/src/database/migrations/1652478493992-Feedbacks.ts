import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Feedbacks1652478493992 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "feedbacks",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "type",
                        type: "varchar"
                    },
                    {
                        name: "comment",
                        type: "varchar"
                    },
                    {
                        name: "screenshot",
                        type: "varchar",
                        isNullable: true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("feedbacks")
    }

}

