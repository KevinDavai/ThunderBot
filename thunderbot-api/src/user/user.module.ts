import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { SERVICES } from 'src/utils/constants';
import { UserService } from './services/user.service';
import { User, UserSchema } from 'src/utils/typeorm/schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [
    {
      provide: SERVICES.USER,
      useClass: UserService,
    },
  ],
  exports: [
    {
      provide: SERVICES.USER,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
