import { Controller, Get, Inject } from "@nestjs/common"

import { ROUTES, SERVICES } from "src/utils/constants";
import { IDiscordService } from "../interfaces/discord";
import { AuthUser } from "src/utils/decorators";
import { User } from "src/utils/typeorm/schema/user.schema";

@Controller(ROUTES.DISCORD)
export class DiscordController {
    constructor(
        @Inject(SERVICES.DISCORD) private readonly discordService: IDiscordService
    ) { }

    @Get('guilds')
    getMutualGuilds(@AuthUser() user: User) {
        console.log(user)
        return this.discordService.getMutualGuilds(user.accessToken);
    }
}