import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Feedback1651874613882 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "feedbacks",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
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
                        type: "varchar"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("feedbacks")
    }

}
