import { Guild, GuildSchema } from './schema/guild.schema';
import { User, UserSchema } from './schema/user.schema';

export const collections = [
  { name: Guild.name, schema: GuildSchema },
  { name: User.name, schema: UserSchema },
];
