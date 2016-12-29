'use strict';

const NILL = 0;
const SPLICE = 1;

let Train = require("./Train");

let Trains = class {
   constructor() {
      this.trains = [];
   }

   addTrain(data) {
      this.trains.push(new Train(data));
   }

   setTrains(trains) {
      for (let i = 0; i < trains.length; i++) {
         this.addTrain(trains[i]);
      }
   }

   deleteTrain(trainNumber) {
      if(this.trains[trainNumber]) {
         this.trains.splice(trainNumber, SPLICE);
      }
   }

   showDepartureTime(departurePoint, destinationTime) {
      for(let i = 0; i < this.trains.length; i++) {
         if(this.trains[i].departurePoint === departurePoint && this.trains[i].destinationTime === destinationTime) {
            console.log(this.trains[i]);
         }
      }
   }

   showDepartureDestination(departurePoint, destinationPoint) {
      for(let i = 0; i < this.trains.length; i++) {
         if(this.trains[i].departurePoint === departurePoint && this.trains[i].destinationPoint === destinationPoint) {
            console.log(this.trains[i]);
         }
      }
   }

   showAllTrains() {
      for(let i = 0; i < this.trains.length; i++) {
         console.log('Поезд ' + i + ':');
         console.log(this.trains[i]);
      }
   }

   makeRoute(startPoints, finishPoints) {
      if(startPoints.length === NILL || finishPoints.length === NILL) {
         console.log('Не удалось разработать маршрут');
         return false;
      }
   }

   CountStartFinish(departurePoint, destinationPoint) {
      return new Promise((resolve, reject) => {
         let startPoints = [],
         finishPoints = [];
         if (departurePoint === destinationPoint) {
            reject('Вам не нужен поезд, чтобы добраться в этот пункт');
            return;
         }
         for(let i = 0; i < this.trains.length; i++) {
            if(this.trains[i].departurePoint === departurePoint) {
               startPoints.push(i);
            }
         }
         for(let i = 0; i < this.trains.length; i++) {
            if(this.trains[i].departurePoint === departurePoint) {
               startPoints.push(i);
            }
         }
         resolve([startPoints, finishPoints, departurePoint, destinationPoint]);
      })
   }
}

module.exports = Trains;
