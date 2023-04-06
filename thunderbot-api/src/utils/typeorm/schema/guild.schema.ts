import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GuildDocument = HydratedDocument<GuildConfiguration>;

@Schema({ collection: 'guilds' })
export class GuildConfiguration {
  @Prop()
  guildId: string;
}

export const GuildSchema = SchemaFactory.createForClass(GuildConfiguration);
