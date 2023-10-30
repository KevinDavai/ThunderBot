export type User = {
  id: string
  discordId: string
  username: string
  discriminator: string
  avatar: string
}

export type PartialGuild = {
  id: string
  name: string
  icon: string
  owner: boolean
  permissions: string
  features: string[]
}

export type GuildResponse = {
  mutualGuilds: PartialGuild[]
  ownerUserGuilds: PartialGuild[]
}

export type GuildConfigType = {
  guildId: string
  plugins?: {
    welcomePlugin?: {
      welcomeMsg?: {
        statut?: boolean
      }
      leaveMsg?: {
        statut?: boolean
      }
      dmWelcomeMsg?: {
        statut?: boolean
      }
      welcomeImage?: {
        statut?: boolean
      }
    }
  }
}

