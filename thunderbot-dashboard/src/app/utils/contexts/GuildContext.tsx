import {createContext} from 'react'
import {GuildConfigType, PartialGuild} from '../types'

type GuildContextType = {
  guild?: PartialGuild
  guildConfig?: GuildConfigType
  loadingConfig: boolean
  updateGuild: (guild: PartialGuild) => void
  updateGuildConfig: (data: GuildConfigType) => void
  updateLoadingConfig: (bool: boolean) => void
}

export const GuildContext = createContext<GuildContextType>({
  loadingConfig: true,
  updateGuild: () => {},
  updateGuildConfig: () => {},
  updateLoadingConfig: () => {},
})
