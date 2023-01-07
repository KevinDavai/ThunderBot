import { model, Schema } from 'mongoose';

export interface Guilds {
  guildId: string;
}

export const GuildSchema = new Schema({
  guildId: String,
});

export default model<Guilds>('Guilds', GuildSchema);
