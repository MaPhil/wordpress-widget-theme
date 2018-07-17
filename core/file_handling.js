'use strict';

const fs = require('fs'),
  config = require('../config'),
  widgetHandling = require('./widget_handling'),
  special_async = require('async'),
  exec = require('child_process').exec;


function clearDirectory(path) {
  return new Promise((resolve) => {
    exec(`rm -r ${path}/${config.folder_name}`, () => {
      exec(`mkdir -p ${path}/${config.folder_name}`, () => {
        resolve();
      })
    })
  })
}

function copyFileOrDir(oldPath, newPath) {
  return new Promise((resolve) => {
    exec(`cp -r ${oldPath} ${newPath}`, () => {
      resolve();
    });
  })
}

function writeObjectToPath(obj, path) {
  return new Promise(resolve => {
    clearDirectory(path).then(function () {
      let executeArray = [];
      special_async.forEachOf(obj, (item, key) => {

        executeArray.push((done) => {
          if (key == 'functions.php' || key == 'style.css') {
            fs.writeFile(`${path}/${config.folder_name}/${key}`, obj[key], function (err) {
              done(null, true);
            })
          } else {
            copyFileOrDir(obj[key], `${path}/${config.folder_name}/${key}`).then(() => {
              done(null, true);
            })
          }
        });
      })
      special_async.parallel(executeArray, function () {
        widgetHandling.copyWidgets(path);
        resolve('written')
      });
    });
  });
}

module.exports = {
  getFileObject: function () {
    return new Promise(resolve => {
      fs.readdir('theme', (err, files) => {
        let fileList = {};
        files.forEach(file => {
          if (file != 'theme.js') {
            fileList[file] = (done) => {
              if (file == 'functions.php' || file == 'style.css') done(null, fs.readFileSync('theme/' + file, "utf8"));
              else done(null, __dirname + '/../theme/' + file);
            };
          }
        });
        special_async.parallel(fileList, function (err, suc) {
          resolve(suc);
        })
      })
    })
  },
  writeObjectToDev: function (obj) {
    return new Promise(resolve => {
      writeObjectToPath(obj, config.dev_uri).then(() => {
        resolve();
      })
    });
  },
  writeObjectToDist: function (obj) {
    return new Promise(resolve => {
      writeObjectToPath(obj, config.dist_uri).then(() => {
        resolve();
      })
    });
  }
}
