import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Medicos } from "./Medicos";

@Entity()
export class Horarios {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Medicos)
    medico!: Medicos;

    @Column({ type: 'date', nullable: true })
    fecha!: Date;

    @Column({ nullable: true })
    estado!: number;

    @CreateDateColumn({ type: 'timestamp', nullable: true })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt!: Date;
}
