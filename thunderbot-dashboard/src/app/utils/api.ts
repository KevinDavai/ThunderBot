import axios, { AxiosRequestConfig } from 'axios';
import { User, GuildResponse } from './types';

const CONFIG: AxiosRequestConfig = { withCredentials: true };

export const getAuthStatus = () => axios.get<User>('http://localhost:3001/api/auth/status', CONFIG);

export const getGuild = () => axios.get<GuildResponse>('http://localhost:3001/api/discord/guilds', CONFIG)
