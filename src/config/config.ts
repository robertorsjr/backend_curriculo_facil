import * as dotenv from 'dotenv';

dotenv.config();

export const { DB_HOST } = process.env;
export const { DB_USER } = process.env;
export const { DB_PWD } = process.env;
export const { DB_NAME } = process.env;
export const { PORT } = process.env;
