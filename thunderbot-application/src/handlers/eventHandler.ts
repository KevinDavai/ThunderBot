import type Client from '../extends/extendsClient';
import type { botEvent } from '../types/botEvent';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

module.exports = (client: Client) => {
  const eventsPath = join(__dirname, '../events');
  const eventFolder = readdirSync(eventsPath);

  for (const folder of eventFolder) {
    const folderDir = join(eventsPath, folder);

    const eventFile = readdirSync(folderDir).filter(file => file.endsWith('.ts'));

    for (const file of eventFile) {
      const filePath = join(folderDir, file);
      const event: botEvent = require(filePath);
      if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
      else client.on(event.name, (...args) => event.execute(...args, client));
    }
  }
};
