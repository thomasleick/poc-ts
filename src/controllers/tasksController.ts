import { Request, Response } from 'express';
import * as tasksServices from "../services/tasksService.ts";

export const getTasks = async (req: Request, res: Response): Promise<void | Response<any, Record<string, any>>> => {
    try {
        const tasks = await tasksServices.getTasks();

        if (!tasks?.length) return res.sendStatus(204);
        return res.status(200).send(tasks);
    } catch (err) { return res.status(500).send(err); }

}

export const postTask = async (req: Request, res: Response): Promise<void | Response<any, Record<string, any>>> => {

}