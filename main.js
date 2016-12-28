'use strict';
const Train = require('./Train');
const Trains = require('./Trains');
const data = require('./stdio');
const menu = require('./menu');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ADD_TRAIN = 1;
const DEL_TRAIN = 2;
const GET_PATH = 3;
const SHOW_START_COME = 4;
const SHOW_START_FINISH = 5;

var trains = new Trains();

data.read('data.json')
   .then(data => data.forEach(cfg => trains.addTrain(cfg)))
   .then(showOptions)
   .catch(console.log);

function showOptions() {
   menu.options(rl)
      .then((option) => {
         switch(option) {
            case ADD_TRAIN:
               return menu.getTrain(rl)
               .then(cfg => trains.addTrain(new Train(cfg)))
               .catch(console.log);
            case DEL_TRAIN:
               trains.showAllTrains();
               return menu.getTrainNumber(rl, trains.trains.length)
               .then(idx => trains.deleteTrain(idx));
         }
      })
      .catch(console.log)
      .then(showOptions)
}
