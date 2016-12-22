'use strict';

var Train = require("./Train");

var Trains = class {
   constructor() {
      this.trains = [];
   };

   addTrain(data) {
      this.trains.push(new Train(data));
   };

   setTrains(trains) {
      for (var i = 0; i < trains.length; i++) {
         this.addTrain(trains[i]);
      }
   }

   deleteTrain(trainNumber) {
      if(this.trains[trainNumber])
         this.trains.splice(trainNumber, 1);
   }

   showStartTime(startPoint, finishTime) {
      var result = [];
      for(var i = 0; i < this.trains.length; i++)
         if(this.trains[i].startPoint === startPoint && this.trains.finishTime === finishTime)
            result.push(this.trains[i]);
      return result;
   }

   showStartFinish(startPoint, finishPoint) {
      var result = [];
      for(var i = 0; i < this.trains.length; i++)
         if(this.trains[i].startPoint === startPoint && this.trains.finishPoint === finishPoint)
            result.push(this.trains[i]);
      return result;
   }
}

module.exports = Trains;
