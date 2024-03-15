import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Roles {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column()
    name!: string;

    @Column("boolean", { default: false })
    status!: boolean;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updateAt!: Date;
}