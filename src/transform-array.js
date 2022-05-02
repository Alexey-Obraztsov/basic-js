const { NotImplementedError } = require('../extensions/index.js');

function transform(arr) {
  let result=arr; 
  for(let i=0;i<result.length;i++){
    if (result[i]==="--double-next"){
      result[i]=result[i+1];
    } else if (result[i]==="--double-prev"){
      result[i]=result[i-1];
    }else if (result[i]==='--discard-next'){
      result.splice(i,2);
    } else if (result[i]==='--discard-prev'){
      result.splice(i-1,2);
    } 
  }
  return result;
}

module.exports = {
  transform
};
