import { Injectable, Inject } from '@nestjs/common'
import { IDiscordService } from '../interfaces/discord';
import { IDiscordHttpService } from '../interfaces/discord-http';
import { SERVICES } from 'src/utils/constants';

@Injectable()
export class DiscordService implements IDiscordService {
    constructor(
        @Inject(SERVICES.DISCORD_HTTP) 
        private readonly discordHttpService: IDiscordHttpService
    ) {}

    getBotGuilds() {
        return this.discordHttpService.fetchBotGuilds();
    }
    getUserGuilds(accessToken: string) {
        return this.discordHttpService.fetchUserGuilds(accessToken);
    }

    async getMutualGuilds(accessToken: string) {
        console.log(accessToken)
        const { data: userGuilds } = await this.getUserGuilds(accessToken);
        const { data: botGuilds } = await this.getBotGuilds();
        const ownerUserGuilds = userGuilds.filter((guild) => guild.owner)
        const mutualGuilds = userGuilds.filter((guild) => botGuilds.some((botGuild) => botGuild.id === guild.id ))
        
        ownerUserGuilds.sort(function(a, b){  
            return mutualGuilds.indexOf(b) - mutualGuilds.indexOf(a) ;
        });

        return {mutualGuilds, ownerUserGuilds};
    }
}