import type { botCommand } from '../../types/botCommand';
import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

const data = new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!');

const command: botCommand = {
  data: data,
  async execute(interaction: CommandInteraction) {
    await interaction.reply('Pong!');
  },
};

module.exports = command;
