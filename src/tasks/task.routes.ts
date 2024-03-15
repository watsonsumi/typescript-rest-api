import { Router } from "express";
import { TaskController } from "./task.controller";

const router = Router();
const controller = new TaskController();

router.post("/task", controller.create);
router.get("/task", controller.list);
router.get("/task/:taskId", controller.get);
router.put("/task/:taskId", controller.update);
router.delete("/task/:taskId", controller.delete);

export default router;