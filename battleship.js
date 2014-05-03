function Board(placements){
  this.placements = placements
  this.shots = []
  this.hits = []
  this.misses = []
}

Board.prototype.toString = function(){
  return "This is a board!";
}

function Placement(size,coords,orientation){
  this.size = size;
  this.coords = coords;
  if(orientation== 'down' || orientation== 'right') {
    this.orientation = orientation
  } else {
    throw "Invalid orientation" 
  }
}

function Coordinate(row,col) {
  this.row = row;
  this.col = col;
}

var c = new Coordinate(0,0);
var placement = new Placement(5,c,'right')
var b = new Board([placement]);
