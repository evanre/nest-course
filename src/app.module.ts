import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import { MONGO_INITDB_DATABASE, DB_PORT } from './config';

// todo: replace localhost with ${DB_HOST} when migrated app into docker
const mongoUrl = `mongodb://localhost:${DB_PORT}/${MONGO_INITDB_DATABASE}`;

@Module({
  imports: [
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
})
export class AppModule {}
