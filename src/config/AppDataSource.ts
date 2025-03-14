import { DataSource } from "typeorm";
import { User } from "../entities/UserEntity";
import { Task } from "../entities/TaskEntity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "todo-crud",
    entities: ["src/entities/**/*{.js,.ts}"],
    migrations: ["src/migrations/**/*{.js,.ts}"],
})