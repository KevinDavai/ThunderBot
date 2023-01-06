import type Client from '../../extends/extendsClient';
import type { botEvent } from '../../types/botEvent';
import { CommandInteraction, EmbedBuilder, Events } from 'discord.js';

const event: botEvent = {
  name: Events.InteractionCreate,
  once: false,
  async execute(interaction: CommandInteraction, client: Client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command)
      return (
        (await interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setColor('Red')
              .setDescription(`❌ No command matching ${interaction.commandName} was found.`),
          ],
          ephemeral: true,
        })) &&
        client.commands.delete(interaction.commandName) &&
        client.application?.commands.delete(interaction.commandName)
      );

    command.execute(interaction, client);
  },
};

module.exports = event;
