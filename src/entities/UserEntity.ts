import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Task } from "./TaskEntity";

@Entity("user")
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({name: "email"})
    email: string;

    @Column({name: "nome"})
    nome: string;

    @CreateDateColumn({name: "created_at", type: "timestamp"})
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(()=>Task, task=>task.user)
    tasks: Task[]
}

