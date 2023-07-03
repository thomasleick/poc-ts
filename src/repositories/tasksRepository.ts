import pool from "../configs/dbConn.ts";
import { Task } from "../utils/interfaces.ts";

export const getTasks = async () => {
    const client = await pool.connect();
    try {
        const query =
            `SELECT *
                FROM todo_list
            `;
        const result = await client.query(query);

        return result.rows;
    } catch (err) {
        throw err;
    } finally {
        client.release();
    }
};

export const postTask = async (task: Task) => {
    const client = await pool.connect();
    try {
        let query;
        let values;
        if (task.date === undefined) {
            query = `INSERT INTO todo_list(task, is_done) VALUES($1, $2) RETURNING id;`
            values = [task.task, task.isDone]
        } else {
            query = `INSERT INTO todo_list(task, date, is_done) VALUES($1, $2, $3) RETURNING id;`
            values = [task.task, task.date, task.isDone]
        }
        const result = await client.query(query, values);
        return result.rows;
    } catch (err) {
        throw err;
    } finally {
        client.release();
    }
}

export const deleteTask = async (id: number) => {
    const client = await pool.connect();
    try {
        const query =
            `DELETE *
                FROM todo_list
                WHERE id=$1
            `;
        const result = await client.query(query, [id]);

        return result.rows;
    } catch (err) {
        throw err;
    } finally {
        client.release();
    }
};