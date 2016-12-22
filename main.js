'use strict';
const Trains = require('./Trains');
const data = require('./stdio');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var trains = new Trains();

data.read('data.json')
   .then(data => data.forEach(cfg => trains.addTrain(cfg)))
   //.then(showMenu)
   .catch(console.log);
