import { User } from './typeorm/schema/user.schema';

export type UserDetails = {
  discordId: string;
  accessToken: string;
  refreshToken: string;
  username: string;
  discriminator: string;
};

export type PartialGuild = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: string[];
}

export type Done = (err: Error, user: User) => void;
