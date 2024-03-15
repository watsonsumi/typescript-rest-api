import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoCita {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 45, nullable: true })
    nombre!: string;

    @Column({ length: 100, nullable: true })
    observacion!: string;

    @Column({ nullable: true })
    estado!: number;
}
