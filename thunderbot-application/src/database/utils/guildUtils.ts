import guildSchema from '../schema/guild.schema';

const addGuild = async (guildId: string): Promise<void> => {
  const guild = await guildSchema.create({
    guildId: guildId,
  });

  guild.save();
};

export { addGuild };
