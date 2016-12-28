'use strict';

let Train = class {
   constructor(data) {
      console.log(data);
      this.number = data.number;
      this.cost = data.cost;
      this.departurePoint = data.departurePoint;
      this.destinationPoint = data.destinationPoint;
      this.departureTime = data.departureTime;
      this.destinationTime = data.destinationTime;
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
