import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { MedicosEspecialidades } from "./MedicosEspecialidades";

@Entity()
export class Especialidades {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100, nullable: true })
    nombre!: string;

    @Column({ length: 190, nullable: true })
    descripcion!: string;

    @Column({ nullable: true })
    estado!: number;

    @CreateDateColumn({ type: 'timestamp', nullable: true })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt!: Date;

    @OneToMany(() => MedicosEspecialidades, medicosEspecialidades => medicosEspecialidades.especialidad)
    medicosEspecialidades!: MedicosEspecialidades[];
}
