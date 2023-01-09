import { UserDetails } from './../../utils/types';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/utils/typeorm/schema/user.schema';
import { IUserService } from '../interfaces/user';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(details: UserDetails) {
    console.log('createUser');
    const createdUser = new this.userModel(details);
    return createdUser.save();
  }

  async findUser(discordId: string): Promise<User> {
    console.log('findUser');
    return this.userModel.findOne({ discordId });
  }
}
