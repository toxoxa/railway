'use strict';
const fs = require("fs");

function read(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(data));
    });
  })
}

module.exports.read = read;
