import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SERVICES } from 'src/utils/constants';
import {
  GuildConfiguration,
  GuildSchema,
} from 'src/utils/typeorm/schema/guild.schema';
import { GuildsController } from './controllers/guilds.controller';
import { GuildsService } from './services/guilds.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GuildConfiguration.name, schema: GuildSchema },
    ]),
  ],
  controllers: [GuildsController],
  providers: [
    {
      provide: SERVICES.GUILDS,
      useClass: GuildsService,
    },
  ],
})
export class GuildsModule {}
