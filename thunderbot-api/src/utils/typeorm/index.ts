import { GuildConfiguration, GuildSchema } from './schema/guild.schema';
import { User, UserSchema } from './schema/user.schema';

export const collections = [
  { name: GuildConfiguration.name, schema: GuildSchema },
  { name: User.name, schema: UserSchema },
];
