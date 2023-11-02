import {PartialGuild, User} from './types'

export const getIconURL = (guild: PartialGuild) =>
  `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`

export const getAvatarURL = (user: User) =>
  `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`

export const getShortName = (guild: PartialGuild) => {
  const matches = guild.name.match(/\b(\w)/g) // ['J','S','O','N']
  const acronym = matches!.join('').slice(0, 3) // JSON
  return acronym
}
