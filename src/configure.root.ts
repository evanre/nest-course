import { config } from 'dotenv';
import { ConfigModule } from '@nestjs/config';

config();

export const { JWT_SECRET, PORT } = process.env;

export const {
  DB_HOST,
  DB_PORT,
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
  MONGO_INITDB_DATABASE,
} = process.env;

export const configModule = ConfigModule.forRoot({
  envFilePath: '.env',
  isGlobal: true,
});
