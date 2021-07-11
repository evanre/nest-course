import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import { configModule } from './configure.root';
import { TokenModule } from './token/token.module';

import {
  // MONGO_INITDB_ROOT_USERNAME,
  // MONGO_INITDB_ROOT_PASSWORD,
  MONGO_INITDB_DATABASE,
  DB_PORT,
} from './configure.root';
import { MailModule } from './mail/mail.module';

// todo: replace localhost with ${DB_HOST} when migrated app into docker
const mongoUrl = `mongodb://localhost:${DB_PORT}/${MONGO_INITDB_DATABASE}`;
// const mongoUrl = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:
//   ${MONGO_INITDB_ROOT_PASSWORD}@localhost:${DB_PORT}/${MONGO_INITDB_DATABASE}`;

@Module({
  imports: [
    UserModule,
    AuthModule,
    configModule,
    MongooseModule.forRoot(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    TokenModule,
    MailModule,
  ],
})
export class AppModule {}
