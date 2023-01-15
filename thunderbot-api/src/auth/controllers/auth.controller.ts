import { AuthenticatedGuard, DiscordAuthGuard } from './../utils/Guards';
import { Response } from 'express';
import { Controller, Get, Post, UseGuards, Res } from '@nestjs/common';
import { ROUTES } from 'src/utils/constants';
import { AuthUser } from 'src/utils/decorators';
import { User } from 'src/utils/typeorm/schema/user.schema';

@Controller(ROUTES.AUTH)
export class AuthController {
  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {}

  @Get('redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    res.redirect('http://localhost:3000/dashboard');
  }

  @Get('status')
  @UseGuards(AuthenticatedGuard)
  status(@AuthUser() user: User) {
    return user;
  }

  @Post('logout')
  logout() {}
}
