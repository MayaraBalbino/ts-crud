import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1744992570920 implements MigrationInterface {
    name = 'Default1744992570920'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "deleteAt" TO "deletedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "deletedAt" TO "deleteAt"`);
    }

}
