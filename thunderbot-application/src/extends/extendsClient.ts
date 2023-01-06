import type { botCommand } from '../types/botCommand';
import Discord, { ClientOptions, Collection } from 'discord.js';

export default class Client extends Discord.Client {
  commands: Collection<string, botCommand> = new Collection();
  guildCommands: Collection<string, botCommand> = new Collection();

  constructor(options: ClientOptions) {
    super(options);
  }
}
