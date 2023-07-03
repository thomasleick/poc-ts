import * as tasksRepository from "../repositories/tasksRepository.ts"

export const getTasks = async () => {
    const result = await tasksRepository.getTasks();
    return result;
};