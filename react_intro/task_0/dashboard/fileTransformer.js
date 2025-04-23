import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function process(src, filename) {
  return {
    code: 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';',
  };
}
