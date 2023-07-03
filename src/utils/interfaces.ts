export interface Task {
    id?: number;
    task: string;
    date?: Date;
    isDone?: boolean;
}

export interface CustomError {
    statusCode: number;
    message: string;
}