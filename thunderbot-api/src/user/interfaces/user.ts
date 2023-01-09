import { Model } from 'mongoose';
import {
  User,
  UserDocument,
  UserSchema,
} from '../../utils/typeorm/schema/user.schema';
import { UserDetails } from './../../utils/types';
export interface IUserService {
  createUser(details: UserDetails): Promise<User>;
  findUser(discordId: string): Promise<User | undefined>;
}
