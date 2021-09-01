import mysql from "mysql2";
import { DB_HOST, DB_NAME, DB_PWD, DB_USER } from './config'

export const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PWD,
  database: DB_NAME
});