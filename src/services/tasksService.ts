import * as tasksRepository from "../repositories/tasksRepository.ts"
import { Task } from "../utils/interfaces.ts";

export const getTasks = async () => {
    const result = await tasksRepository.getTasks();
    return result;
};

export const postTask = async (task: Task) => {
    task.date = task?.date ? new Date(task.date) : undefined;
    if (!task.isDone) task.isDone = false;

    const result = await tasksRepository.postTask(task);
    return result;
}

export const deleteTask = async (id: number) => {
    const result = await tasksRepository.deleteTask(id);
    return result;
};