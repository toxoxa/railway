'use strict';

var Train = require("./Train");

var Trains - class {
   counstructor() {
      this.trains = [];
   };

   addTrain(data) {
      this.trains.push(new Tour(data));
   };

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

module.exports = Tours;
