import type Client from '../../extends/extendsClient';
import type { botEvent } from '../../types/botEvent';
import { Events } from 'discord.js';

const event: botEvent = {
  name: Events.ClientReady,
  once: true,
  execute(client: Client) {
    console.log(`\x1b[33m[${client.user?.username}] Le bot est maintenant connecté!\x1b[0m`);

    client.application?.commands.set(client.commands.map(v => v.data));
  },
};

module.exports = event;
