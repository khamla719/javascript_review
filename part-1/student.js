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

Student.prototype.letterGrade = function() {
  var grade = this.averageScore();
  if (grade >= 90) {
    return "A";
  }
  else if (grade >= 80 && grade < 90) {
    return "B";
  }
  else if (grade >= 70 && grade < 80) {
    return "C";
  }
  else if (grade >= 60 && grade < 70) {
    return "D";
  }
  else {
    return "F";
  }
}