import { User } from './typeorm/schema/user.schema';

export type UserDetails = {
  discordId: string;
  accessToken: string;
  refreshToken: string;
  username: string;
  discriminator: string;
};

export type Done = (err: Error, user: User) => void;
