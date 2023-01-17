export interface IDiscordService {
    getBotGuilds();
    getUserGuilds(accessToken: string);
    getOwnerUserGuilds(accessToken: string);
    getMutualGuilds(accessToken: string);
}