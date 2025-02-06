/**
 * Increments the minor version of the package.
 */
const path = require('path');
const cfgPath = path.join(__dirname, '..', 'package.json');

const cfg = require(cfgPath);

const v = cfg.version.split('.')
~~v[v.length - 1]++;
cfg.version = v.join('.');

const fs = require('fs');
fs.writeFileSync(cfgPath, JSON.stringify(cfg, null, '  '));
