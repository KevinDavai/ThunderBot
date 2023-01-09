import { ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class DiscordAuthGuard extends AuthGuard('discord') {
  async canActivate(context: ExecutionContext) {
    const activate = (await super.canActivate(context)) as boolean;
    console.log('salutsdfsqfd');
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    return activate;
  }
}
