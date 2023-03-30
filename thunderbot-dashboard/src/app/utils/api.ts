import axios, {AxiosRequestConfig} from 'axios'
import {User, GuildResponse, GuildConfigType} from './types'

const CONFIG: AxiosRequestConfig = {withCredentials: true}

const API_URL: string = 'http://localhost:3001/api'

export const getAuthStatus = () => axios.get<User>(API_URL + '/auth/status', CONFIG)

export const getGuild = () => axios.get<GuildResponse>(API_URL + '/discord/guilds', CONFIG)

export const getGuildConfig = (guildId?: string) =>
  axios.get<GuildConfigType>(API_URL + `/guilds/config/${guildId}`)
