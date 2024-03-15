import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Pacientes {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 50, nullable: true })
    hc!: string;

    @Column({ length: 100, nullable: true })
    nombre!: string;

    @Column({ length: 100, nullable: true })
    apellido!: string;

    @Column({ length: 8 })
    dni!: string;

    @Column({ length: 100 })
    direccion!: string;

    @Column({ length: 10, nullable: true })
    telefono!: string;

    @Column({ length: 8, nullable: true })
    genero!: string;

    @Column({ length: 100, nullable: true })
    email!: string;

    @Column({ type: 'date', nullable: true })
    fecha_nacimiento!: Date;

    @Column({ nullable: true })
    estado!: number;

    @CreateDateColumn({ type: 'timestamp', nullable: true })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt!: Date;
}
 