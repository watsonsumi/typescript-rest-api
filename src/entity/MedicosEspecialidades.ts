import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Medicos } from "./Medicos";
import { Especialidades } from "./Especialidades";

@Entity()
export class MedicosEspecialidades {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Medicos, medico => medico.medicosEspecialidades)
    medico!: Medicos;

    @ManyToOne(() => Especialidades, especialidad => especialidad.medicosEspecialidades)
    especialidad!: Especialidades;

    @Column({ nullable: true })
    estado!: number;

    @CreateDateColumn({ type: 'timestamp', nullable: true })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt!: Date;
}
