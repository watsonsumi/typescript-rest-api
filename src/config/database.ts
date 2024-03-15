import { DataSource } from "typeorm";

import { Roles } from "../entity/Roles"
import { Users } from "../entity/Users"
import { Especialidades } from "../entity/Especialidades"
import { Medicos } from "../entity/Medicos"
import { Pacientes } from "../entity/Pacientes"
import { MedicosEspecialidades } from "../entity/MedicosEspecialidades"
import { TipoCita } from "../entity/TipoCita"
import { Horarios } from "../entity/Horarios"
import { Citas } from "../entity/Citas"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "test", 
    entities: [Roles, Users, Especialidades, Medicos, Pacientes, MedicosEspecialidades, TipoCita, Horarios, Horarios, Citas ],
    synchronize: true,
    logging: false,
})