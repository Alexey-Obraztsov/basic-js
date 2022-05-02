const { NotImplementedError } = require('../extensions/index.js');

 class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    let exit =false;
    while(!exit){
      exit=true;
      count++;
      let len=arr.length;
      for (let i = 0; i < len; i++) {
        if (Array.isArray(arr[i])) {
          exit=false;
          for (let x = 0; x < arr[i].length; x++) {
            arr.push(arr[i][x]);
          }
          arr[i]=0;
        }
      }
    }
    return count;
  }
}

module.exports = {
  DepthCalculator
};
