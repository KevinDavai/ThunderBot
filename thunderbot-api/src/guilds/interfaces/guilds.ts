import { GuildConfiguration } from 'src/utils/typeorm/schema/guild.schema';

export interface IGuildsService {
  getGuildConfig(guildId: string): Promise<GuildConfiguration>;
}
