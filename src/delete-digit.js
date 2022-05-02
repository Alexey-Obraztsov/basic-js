const { NotImplementedError } = require('../extensions/index.js');


function deleteDigit(n) {
  let arr = String(n).split('');
  return Math.max(...arr.map((el,i)=>{
    let arr2 = arr.slice(); 
    arr2.splice(i,1); 
    return Number(arr2.join(''));
  }));
}


module.exports = {
  deleteDigit
};
