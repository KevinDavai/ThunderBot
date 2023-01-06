import type Client from '../extends/extendsClient';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { langObj } from '../utils/langUtils';

module.exports = () => {
  const langPath = join(__dirname, '../languages');
  const langFile = readdirSync(langPath);

  for (const file of langFile) {
    const name = file.replace(/\.[^/.]+$/, '');
    const filePath = join(langPath, file);
    let rawdata = readFileSync(filePath);
    let lang = JSON.parse(rawdata.toString());
    langObj[name] = lang;
  }
};
