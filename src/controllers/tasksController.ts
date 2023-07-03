import { Request, Response } from 'express';
import * as tasksServices from "../services/tasksService.ts";
import { CustomError } from '../utils/interfaces.ts';

export const getTasks = async (req: Request, res: Response): Promise<void | Response<any, Record<string, any>>> => {
    try {
        const tasks = await tasksServices.getTasks();

        if (!tasks?.length) return res.sendStatus(204);
        return res.status(200).send(tasks);
    } catch (err) { return res.status(500).send(err); }

}

export const postTask = async (req: Request, res: Response): Promise<void | Response<any, Record<string, any>>> => {
    try {
        const task = await tasksServices.postTask(req.body)
        return res.status(201).send(task)
    } catch (err) { return res.status(500).send(err) }
}

export const deleteTask = async (req: Request, res: Response): Promise<void | Response<any, Record<string, any>>> => {
    try {
        const task = await tasksServices.deleteTask(res.locals.id)
        return res.sendStatus(204)
    } catch (err: CustomError | any) {
        if (err?.statusCode === 404) return res.status(err.statusCode).send(err.message)
        return res.status(500).send(err)
    }
}