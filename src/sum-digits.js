const { NotImplementedError } = require('../extensions/index.js');

function getSumOfDigits(n) {
  while(n>9){
    let result = 0;
    let string = n.toString();
    for(let i=0;i<string.length;i++){
      result+=Number(string[i]);
    }
    n=result;
  }
  return n;
} 

module.exports = {
  getSumOfDigits
};
