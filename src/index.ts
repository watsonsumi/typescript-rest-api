import express from "express";
import TaskRoutes from "./tasks/task.routes";
import "reflect-metadata";
import { AppDataSource } from "./config/database";

const app = express();

AppDataSource.initialize()
  .then(() => console.log("Database connected"))
  .catch(console.error)

app.use('/api', TaskRoutes);

app.listen(3031, ()=> {
    console.log("app ejecute in port: 3031");
});