var Train = new function(data) {
   this.number = data.number;
   this.cost = data.cost;
   this.startPoint = data.startPoint;
   this.finishPoint = data.finishPoint;
   this.startTime = data.startTime;
   this.finishTime = data.finishPoint;
}

Train.prototype.getData = function() {
   return {
      number: this.number,
      cost: this.cost,
      startPoint: this.startPoint,
      finishPoint: this.finishPoint.
      startTime: this.startTime,
      finishTime : this.finishTime
   }
}

module.exports = Train;
