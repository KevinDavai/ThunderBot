import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'users' })
export class User {
  @Prop({})
  id: number;

  @Prop({ unique: true, name: 'discord_id' })
  discordId: string;

  @Prop({name: 'access_token'})
  accessToken: string;

  @Prop({name: 'refresh_token'})
  refreshToken: string;

  @Prop()
  username: string;

  @Prop()
  discriminator: string;

  @Prop()
  avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
