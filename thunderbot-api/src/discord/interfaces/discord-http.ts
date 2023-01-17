import { PartialGuild } from "src/utils/types";
import { AxiosResponse } from "axios"

export interface IDiscordHttpService {
    fetchBotGuilds(): Promise<AxiosResponse<PartialGuild[]>>;
    fetchUserGuilds(accessToken: string): Promise<AxiosResponse<PartialGuild[]>>;
}