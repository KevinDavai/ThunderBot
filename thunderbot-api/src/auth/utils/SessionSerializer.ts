import { IUserService } from 'src/user/interfaces/user';
import { SERVICES } from 'src/utils/constants';
import { Inject } from '@nestjs/common';
import { Done } from './../../utils/types';
import { User } from '../../utils/typeorm/schema/user.schema';
import { PassportSerializer } from '@nestjs/passport';

export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject(SERVICES.USER) private readonly userService: IUserService,
  ) {
    super();
  }
  serializeUser(user: User, done: Done) {
    done(null, user);
  }

  async deserializeUser(user: User, done: Done) {
    try {
      const userDB = await this.userService.findUser(user.discordId);
      return userDB ? done(null, userDB) : done(null, null);
    } catch (err) {
      done(err, null);
    }
  }
}
