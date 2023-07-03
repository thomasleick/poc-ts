import pool from "../configs/dbConn.ts";

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