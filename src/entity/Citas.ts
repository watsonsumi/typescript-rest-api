import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Medicos } from "./Medicos";
import { Pacientes } from "./Pacientes";
import { TipoCita } from "./TipoCita";

@Entity()
export class Citas {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Medicos)
    medico!: Medicos;

    @ManyToOne(() => Pacientes)
    paciente!: Pacientes;

    @ManyToOne(() => TipoCita)
    tipoCita!: TipoCita;

    @Column({ type: 'date', nullable: true })
    fecha_atencion!: Date;

    @Column({ type: 'time', nullable: true })
    inicio_atencion!: Date;

    @Column({ type: 'time', nullable: true })
    final_atencion!: Date;

    @Column({ nullable: true })
    estado!: number;

    @Column({ length: 191, nullable: true })
    observacion!: string;

    @CreateDateColumn({ type: 'timestamp', nullable: true })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt!: Date;
}
