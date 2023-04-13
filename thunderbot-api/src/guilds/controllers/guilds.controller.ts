import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { ROUTES, SERVICES } from 'src/utils/constants';
import { IGuildsService } from '../interfaces/guilds';

@Controller(ROUTES.GUILDS)
export class GuildsController {
  constructor(
    @Inject(SERVICES.GUILDS) private readonly guildsService: IGuildsService,
  ) {}

  @Get('config/:guildId')
  async getGuildConfig(@Param('guildId') guildId: string) {
    const guildConfig = await this.guildsService.getGuildConfig(guildId);

    if (!guildConfig) {
      throw new HttpException(
        'Guild Configuration was not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return guildConfig;
  }

  @Post(':guildId/config/welcome')
  async updatePluginWelcome(@Param('guildId') guildId: string, @Body('welcomeConfig') welcomeConfig: object) {
    console.log(guildId, welcomeConfig)
  }
}
