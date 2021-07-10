import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import { configModule } from './configure.root';
import { TokenModule } from './token/token.module';

import { MONGO_INITDB_DATABASE, DB_PORT } from './configure.root';

// todo: replace localhost with ${DB_HOST} when migrated app into docker
const mongoUrl = `mongodb://localhost:${DB_PORT}/${MONGO_INITDB_DATABASE}`;

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
  ],
})
export class AppModule {}
