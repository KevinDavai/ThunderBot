import type Client from '../extends/extendsClient';
import type { botCommand } from '../types/botCommand';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

module.exports = (client: Client) => {
  const commandsPath = join(__dirname, '../commands');
  const commandFolders = readdirSync(commandsPath);

  for (const folder of commandFolders) {
    const folderDir = join(commandsPath, folder);

    const commandFile = readdirSync(folderDir).filter(file => file.endsWith('.ts'));

    for (const file of commandFile) {
      const filePath = join(folderDir, file);
      const command: botCommand = require(filePath);

      if (!command || !command?.data.name) return;

      client.commands.set(command.data.name, command);
    }
  }
};
