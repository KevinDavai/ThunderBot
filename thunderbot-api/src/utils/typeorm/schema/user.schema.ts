import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'users' })
export class User {
  @Prop({})
  id: number;

  @Prop({ unique: true, name: 'discord_id' })
  discordId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
