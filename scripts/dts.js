const { types } = require('wav-file-decoder/package.json');
const { copyFileSync } = require('fs');
const { resolve } = require('path');

const source = resolve(require.resolve('wav-file-decoder/package.json').replace('package.json', ''), types)
const target = resolve('lib/index.d.ts')

copyFileSync(source, target)