import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { collections } from './utils/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../.env',
    }),
    PassportModule.register({ session: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature(collections),
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
