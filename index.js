'use strict';
const config = require('./config'),
  theme = require('./theme/theme'),
  argv = require('minimist')(process.argv.slice(2)),
  fileHandling = require('./core/file_handling'),
  formalHandling = require('./core/formal_handling');




async function execTheme() {
  let fi = await fileHandling.getFileObject();
  
  fi['style.css'] = formalHandling.inputHeaderStyle(fi['style.css'], theme);
  
  await fileHandling.writeObjectToDev(fi);
}
execTheme();
