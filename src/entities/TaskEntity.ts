import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from '../enums/statusEntityEnum';
import { User } from './UserEntity';

@Entity('task')
export class Task{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column({
        type: "enum",
        enum: TaskStatus, 
        default: TaskStatus.PENDING,
    })
    status: TaskStatus
    @ManyToOne(()=>User, user=>user.tasks)
    user: User
}
