const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
  let ears=0;
  for(let ind1=0;ind1<matrix.length;ind1++){
    for(let ind2=0;ind2<matrix.length;ind2++){
      if(matrix[ind1][ind2]==='^^'){
        ears+=1;
      }
    }
  }
  return ears;
}

module.exports = {
  countCats
};
