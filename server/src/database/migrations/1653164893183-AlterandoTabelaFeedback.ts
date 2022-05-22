import { MigrationInterface, QueryRunner } from "typeorm"

export class AlterandoTabelaFeedback1653164893183 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "feedbacks" ADD "screenshot" clob NULL`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "feedbacks" DROP COLUMN "screenshot"`
        )
    }

}
