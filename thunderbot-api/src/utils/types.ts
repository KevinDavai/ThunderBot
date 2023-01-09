import { User } from './typeorm/schema/user.schema';

export type UserDetails = {
  discordId: string;
};

export type Done = (err: Error, user: User) => void;
