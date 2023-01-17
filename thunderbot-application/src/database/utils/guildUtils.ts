import type Client from '../../extends/extendsClient';
import guildSchema from '../schema/guild.schema';

const addGuild = async (guildId: string): Promise<void> => {
  const guild = await guildSchema.create({
    guildId: guildId,
  });

  guild.save();
};

const removeGuild = async (guildId: string): Promise<void> => {
  const guild = await guildSchema.findOne({ guildId })

    if (!guild) return

    guild.deleteOne()
};

/**
 * Create all document for each guild that have been added when the bot was offline
 * @param client
 */
const createGuildDataOfflined = async (client: Client) => {
  const guildsIdClient = client.guilds.cache.map((guild) => guild.id)
  const guildsIdMongo = await (await guildSchema.find({})).map((guild) => guild.guildId)

  let inc = 0
  guildsIdClient.forEach((id) => {
      if (guildsIdMongo.includes(id)) return
      else {
        addGuild(id)
          inc++
          console.log('❤️ A guilds have been Added')

      }
  })
}
/**
* Delete all document for each guild that have been remove when the bot was offline
* @param client
*/
const deleteGuildDataOfflined = async (client: Client) => {
  const guildsIdClient = client.guilds.cache.map((guild) => guild.id)
  const guildsIdMongo = await (await guildSchema.find({})).map((guild) => guild.guildId)

  let inc = 0
  guildsIdMongo.forEach((id) => {
      if (guildsIdClient.includes(id)) return
      else {
          removeGuild(id)
          inc++
          console.log('❌ A guilds have been deleted')
      }
  })
}

export { addGuild, createGuildDataOfflined, deleteGuildDataOfflined };
