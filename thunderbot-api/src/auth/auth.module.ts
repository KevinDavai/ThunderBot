import { DiscordStrategy } from './utils/DiscordStrategy';
import { Module } from '@nestjs/common';
import { SERVICES } from 'src/utils/constants';
import { UserModule } from '../user/user.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { SessionSerializer } from './utils/SessionSerializer';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [
    DiscordStrategy,
    SessionSerializer,
    {
      provide: SERVICES.AUTH,
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
