import { Injectable } from "@nestjs/common";
import { IDiscordHttpService } from "../interfaces/discord-http";
import axios from 'axios'
import { DISCORD_API_URI } from "src/utils/constants";
import { PartialGuild } from "src/utils/types";

@Injectable()
export class DiscordHttpService implements IDiscordHttpService {
    fetchBotGuilds() {
        const TOKEN = process.env.DISCORD_BOT_TOKEN;
        return axios.get<PartialGuild[]>(`${DISCORD_API_URI}/users/@me/guilds`, {
            headers: {
                Authorization: `Bot ${TOKEN}`,
            },
        })    
    }

    fetchUserGuilds(accessToken: string) {
        return axios.get<PartialGuild[]>(`${DISCORD_API_URI}/users/@me/guilds`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    }

}