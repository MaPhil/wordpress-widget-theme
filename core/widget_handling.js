'use strict';

const fs = require('fs'),
  config = require('../config'),
  theme = require('../theme/theme'),
  special_async = require('async'),
  exec = require('child_process').exec;



async function copyWidgetClass(path) {
  await exec(`mkdir -p ${path}/${config.folder_name}/widgets`);
  for(let i=0;i<theme.widgets.length;i++){
    await exec(`cp -r ${__dirname}/../widgets/${theme.widgets[i]}/widget.php ${path}/${config.folder_name}/widgets/${theme.widgets[i]}.php`);
  }
}
function addToFunctions(functions,widgets,pulling) {
  
  functions = functions.split('/**$$register$$*/');
  
  functions = `${functions[0]}\n\n${widgets}\n\n${functions[1]}`;
  
  functions = functions.split('/**$$pull-widgets$$*/');
  
  functions = `${functions[0]}\n\n${pulling}\n\n${functions[1]}`;
  
  return functions;
}

module.exports = {
  addWidgets: function(functions) {
    let temp_register = '';
    let temp_pull = '';
    for(let i=0;i<theme.widgets.length;i++){

      temp_register+=`register_widget( 'wp_wt_${theme.widgets[i].replace(/-/g,'_')}' );\n`;
      temp_pull+=`require_once( get_template_directory() . '/widgets/${theme.widgets[i]}.php' );\n`;
    }
    
    return addToFunctions(functions,temp_register,temp_pull);
  },
  copyWidgets: function(path) {
    return new Promise((resolve)=>{
      copyWidgetClass(path);
      resolve();
    });
  }
}
