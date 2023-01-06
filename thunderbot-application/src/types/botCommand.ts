import type { SlashCommandBuilder } from 'discord.js';

export interface botCommand {
  data: SlashCommandBuilder;
  cooldown?: boolean;
  execute(...args: any[]): any;
}
