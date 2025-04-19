import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1744992384647 implements MigrationInterface {
    name = 'Default1744992384647'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "deleteAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "deleteAt"`);
    }

}
