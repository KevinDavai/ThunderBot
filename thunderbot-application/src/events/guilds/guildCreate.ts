import type { botEvent } from '../../types/botEvent';
import { Events, Guild } from 'discord.js';
import { addGuild } from '../../database/utils/guildUtils';

const event: botEvent = {
  name: Events.GuildCreate,
  once: false,
  async execute(guild: Guild) {
    console.log('new guild');
    addGuild(guild.id);
  },
};

module.exports = event;
