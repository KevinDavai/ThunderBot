import { Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  GuildConfiguration,
  GuildDocument,
} from 'src/utils/typeorm/schema/guild.schema';
import { IGuildsService } from '../interfaces/guilds';

export class GuildsService implements IGuildsService {
  constructor(
    @InjectModel(GuildConfiguration.name)
    private readonly guildConfigModel: Model<GuildDocument>,
  ) {}

  async getGuildConfig(guildId: string): Promise<GuildConfiguration> {
    return this.guildConfigModel.findOne({ guildId });
  }
}
