import { config } from 'dotenv';
config();

export const { JWT_SECRET_KEY, PORT } = process.env;

export const {
  DB_HOST,
  DB_PORT,
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
  MONGO_INITDB_DATABASE,
} = process.env;
