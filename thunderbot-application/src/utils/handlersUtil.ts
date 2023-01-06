import type Client from '../extends/extendsClient';
import { readdirSync } from 'fs';
import { join } from 'path';

export const loadHandlers = (client: Client): void => {
  const handlersDir = join(__dirname, '../handlers');
  readdirSync(handlersDir).forEach(file => {
    require(`${handlersDir}/${file}`)(client);
  });
};
