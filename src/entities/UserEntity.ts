import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Task
    
 } from "./TaskEntity";
@Entity("user")
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    email: string;

    @Column()
    name: string;
    @OneToMany(()=>Task, task=>task.user)
    tasks: Task[]
}

