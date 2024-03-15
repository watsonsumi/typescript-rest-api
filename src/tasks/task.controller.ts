import { Request, Response, NextFunction } from "express";

export class TaskController {
    async create(
        req: Request, 
        res: Response, 
        next: NextFunction
    ): Promise<void>{
        res.status(200).json({
            message: "Tasks from "
        })
    }

    async list(
        req: Request, 
        res: Response, 
        next: NextFunction
    ): Promise<void>{
        res.status(200).json({
            message: "Tasks from "
        })
    }

    async get(
        req: Request, 
        res: Response, 
        next: NextFunction
    ): Promise<void>{
        res.status(200).json({
            message: "Tasks from controller"
        })
    }

    async update(
        req: Request, 
        res: Response, 
        next: NextFunction
    ): Promise<void>{
        res.status(200).json({
            message: "Tasks from controller"
        })
    }

    async delete(
        req: Request, 
        res: Response, 
        next: NextFunction
    ): Promise<void>{
        res.status(200).json({
            message: "Tasks from controller"
        })
    }
}