import { Module } from "@nestjs/common";
import { DiscordController } from "./controllers/discord.controller";
import { SERVICES } from "src/utils/constants";
import { DiscordService } from "./services/discord.service";
import { DiscordHttpService } from "./services/discord-http.service";

@Module({
    controllers: [DiscordController],
    providers: [
        {
            provide: SERVICES.DISCORD,
            useClass: DiscordService
        },
        {
            provide: SERVICES.DISCORD_HTTP,
            useClass: DiscordHttpService
        }
    ]
})


export class DiscordModule {}