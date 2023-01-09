import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GuildDocument = HydratedDocument<Guild>;

@Schema({ collection: 'guilds' })
export class Guild {
  @Prop()
  guildId: string;
}

export const GuildSchema = SchemaFactory.createForClass(Guild);
