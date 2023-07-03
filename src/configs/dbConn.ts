import pg, { PoolClient } from "pg";

const DATABASE_URL: string | undefined = process.env.DATABASE_URL;
const configDatabase: pg.ConnectionConfig = {
  connectionString: DATABASE_URL
};

if (process.env.MODE === "prod") configDatabase.ssl = true;

const pool: pg.Pool = new pg.Pool(configDatabase);

pool.connect((err: Error, client: PoolClient, done: (release?: any) => void) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Connected to PostgreSQL database");
  done();
});

export default pool;