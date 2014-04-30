function Board(){
  this.shots = []
  this.hits = []
  this.misses = []
}

Board.prototype.toString = function(){
  return "This is a board!";
}

var b = new Board();
console.log(b.toString());