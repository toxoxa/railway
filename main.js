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

let trains = new Trains();

data.read('data.json')
   .then(data => data.forEach(tr => trains.addTrain(tr)))
   .then(showOptions)
   .catch(console.log);

function showOptions() {
   menu.options(rl)
      .then((option) => {
         switch(option) {
            case ADD_TRAIN:
               return menu.getTrain(rl)
               .then(tr => trains.addTrain(new Train(tr)))
               .catch(console.log);
            case DEL_TRAIN:
               trains.showAllTrains();
               return menu.getTrainNumber(rl, trains.trains.length)
               .then(idx => trains.deleteTrain(idx));
            case GET_PATH:
               return menu.getDepartureAndDestination(rl)
               .then(params => trains.CountStartFinish(params['departurePoint'], params['destinationPoint']))
               .then(params => trains.makeRoute(params[ADD_TRAIN], params[DEL_TRAIN], params[GET_PATH], params[SHOW_START_FINISH]))
               .catch(console.log)
            case SHOW_START_COME:
               return menu.getPointAndTime(rl)
               .then(params => trains.showDepartureTime(params['departurePoint'], params['destinationTime']));
            case SHOW_START_FINISH:
               return menu.getDepartureAndDestination(rl)
               .then(params => trains.showDepartureDestination(params['departurePoint'], params['destinationPoint']));
         }
      })
      .catch(console.log)
      .then(showOptions)
}
