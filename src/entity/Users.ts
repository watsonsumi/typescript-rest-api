import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Roles } from "./Roles";

@Entity()
export class Users {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @ManyToOne(() => Roles)
    role!: Roles;

    @Column()
    name!: string;

    @Column()
    last_name!: string;

    @Column()
    username!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    phone!: string;

    @Column()
    dni!: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt!: Date;
}
