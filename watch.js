'use strict';

const config = require('./config'),
  theme = require('./theme/theme'),
  argv = require('minimist')(process.argv.slice(2)),
  fileHandling = require('./core/file_handling'),
  widgetHandling = require('./core/widget_handling'),
  watch = require('watch'),
  formalHandling = require('./core/formal_handling');




async function execTheme() {
	console.log('writing new theme');
  let fi = await fileHandling.getFileObject();
  
  fi['style.css'] = formalHandling.inputHeaderStyle(fi['style.css'], theme);
  fi['functions.php'] = widgetHandling.addWidgets(fi['functions.php']);

  await fileHandling.writeObjectToDev(fi);
}


watch.createMonitor(__dirname, function (monitor) {
	monitor.files['widgets/*','theme/*'] 
	monitor.on("created", function (f, stat) {
		execTheme();
	})
	monitor.on("changed", function (f, curr, prev) {
		execTheme();
	})
	monitor.on("removed", function (f, stat) {
		execTheme();
	})
    //monitor.stop(); // Stop watching
})