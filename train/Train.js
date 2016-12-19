var Train = new function(data) {
   this.number = data.number;
   this.cost = data.cost;
   this.start = data.start;
   this.finish = data.finish;
}

Train.prototype.getData = function() {
   return {
      number: this.number,
      cost: this.cost,
      start: this.start,
      finish: this.finish
   }
}

module.exports = Train;
