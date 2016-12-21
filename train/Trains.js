var Train = require("./Train");

var Trains = function(){
   this.trains = [];
};

Trains.prototype.addTrain = function(data) {
   this.trains.push(new Tour(data));
};

Trains.prototype.deleteTrain = function(trainNumber) {
   if(this.trains[trainNumber])
      this.trains.splice(trainNumber, 1);
}

Trains.prototype.showStartTime = function(startPoint, finishTime) {
   var result = [];
   for(var i = 0; i < this.trains.length; i++)
      if(this.trains[i].startPoint === startPoint && this.trains.finishTime === finishTime)
         result.push(this.trains[i]);
   return result;
}

Trains.prototype.showStartFinish = function(startPoint, finishPoint) {
   var result = [];
   for(var i = 0; i < this.trains.length; i++)
      if(this.trains[i].startPoint === startPoint && this.trains.finishPoint === finishPoint)
         result.push(this.trains[i]);
   return result;
}

module.exports = Tours;
