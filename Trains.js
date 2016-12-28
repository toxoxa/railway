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

   showdepartureTime(departurePoint, destinationTime) {
      var result = [];
      for(var i = 0; i < this.trains.length; i++)
         if(this.trains[i].departurePoint === departurePoint && this.trains.destinationTime === destinationTime)
            result.push(this.trains[i]);
      return result;
   }

   showdeparturedestination(departurePoint, destinationPoint) {
      var result = [];
      for(var i = 0; i < this.trains.length; i++)
         if(this.trains[i].departurePoint === departurePoint && this.trains.destinationPoint === destinationPoint)
            result.push(this.trains[i]);
      return result;
   }

   showAllTrains() {
      for(let i = 0; i < this.trains.length; i++) {
         console.log('Поезд ' + i + ':');
         console.log(this.trains[i]);
      }
   }

   makeRoute(departurePoint, destinationPoint) {
      //TODO см Алгоритм обхода дерева в глубину ^_^
   }
}

module.exports = Trains;
