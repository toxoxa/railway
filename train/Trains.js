vat Train = require("./Train");

var Trains = function(){
   this.trains = [];
};

Trains.prototype.addTrain = function(data) {
   this.trains.push(new Tour(data));
};

Trains.prototype.deleteTrain = function(trainNumber) {
   this.trains.splice(trainNumber, 1);
}
