import { connectDatabase } from './utils/mongoUtils';
import { GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';

import Client from './extends/extendsClient';
import { loadHandlers } from './utils/handlersUtil';

// Loads .env file contents into process.env.
config({ path: '../.env' });

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

loadHandlers(client);

connectDatabase();

client.login(process.env.DISCORD_BOT_TOKEN).catch(err => {
  console.error('[Login Error]', err);
  process.exit(1);
});
