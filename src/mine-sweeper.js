const { NotImplementedError } = require('../extensions/index.js');

function minesweeper(matrix) {
  let arr=[];
  for (let y = 0; y < matrix.length; y++) {
    let massiv=[];
    for (let x = 0; x < matrix[y].length; x++) {
      let k=0;
      if(y>0){
        if (matrix[y-1][x]) {
          k++;
        }
      }

      if (y<matrix.length-1) {
        if (matrix[y+1][x]) {
          k++;
        }
      }

      if (x>0) {
        if (matrix[y][x-1]) {
          k++;
        }
      }

      if (x<matrix[y].length-1) {
        if (matrix[y][x+1]) {
          k++;
        }
      }

      if(y>0 && x>0){
        if (matrix[y-1][x-1]) {
          k++;
        }
      }

      if(y<matrix.length-1 && x<matrix[y].length-1){
        if (matrix[y+1][x+1]) {
          k++;
        }
      }

      if(y>0 && x<matrix[y].length-1){
        if (matrix[y-1][x+1]) {
          k++;
        }
      }

      if(y<matrix.length-1 && x>0){
        if (matrix[y+1][x-1]) {
          k++;
        }
      }
      massiv.push(k);
    }
    arr.push(massiv);
  }
  return arr;
}

module.exports = {
  minesweeper
};
