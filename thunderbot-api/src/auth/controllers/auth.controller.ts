import { DiscordAuthGuard } from './../utils/Guards';
import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ROUTES } from 'src/utils/constants';

@Controller(ROUTES.AUTH)
export class AuthController {
  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {}

  @Get('redirect')
  @UseGuards(DiscordAuthGuard)
  redirect() {}

  @Get('status')
  status() {}

  @Post('logout')
  logout() {}
}
