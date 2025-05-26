
import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const database = process.env.POSTGRES_DATABASE;
const host = process.env.POSTGRES_HOST;
const port = parseInt(process.env.POSTGRES_PORT);

const pool = new Pool({
  user: user,
  password: password,
  database: database,
  host: host,
  port: port
});

export default pool;