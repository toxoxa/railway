'use strict';

var Train = class {
   constructor(data) {
      this.number = data.number;
      this.cost = data.cost;
      this.departurePoint = data.departurePoint;
      this.destinationPoint = data.destinationPoint;
      this.departureTime = data.departureTime;
      this.destinationTime = data.destinationPoint;
   }

   getTrain() {
      return {
         number: this.number,
         cost: this.cost,
         departurePoint: this.departurePoint,
         destinationPoint: this.destinationPoint,
         departureTime: this.departureTime,
         destinationTime : this.destinationTime
      }
   }
}

module.exports = Train;
