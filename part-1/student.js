var Student = function(name, scores) {
  this.firstName = name,
  this.scores = scores;
}

Student.prototype.averageScore = function() {
  var total = 0;
  for(var i = 0; i < this.scores.length; i++ ) {
    total += this.scores[i];
  }
  return Math.floor(total / this.scores.length);
}