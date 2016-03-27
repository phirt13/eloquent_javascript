(function() {

  var makeChessBoard = function(xDimension, yDimension) {
    var boardString = '';

    for(var yAxis = 1; yAxis <= yDimension; yAxis++) {
      console.log('Row ' + yAxis);
      for(var xAxis = 1; xAxis <= xDimension; xAxis++) {
        if((yAxis % 2) === 0) {
          if((xAxis % 2) === 0) {
            boardString += ' ';
          } else {
            boardString += '#';
          }
        } else {
          if((xAxis % 2) === 0) {
            boardString += '#';
          } else {
            boardString += ' ';
          }
        }
      }
      boardString += '\n';
    }
    console.log(boardString);
  };

  makeChessBoard(8, 8);

}());
