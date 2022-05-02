const { NotImplementedError } = require('../extensions/index.js');

function sortByHeight(arr) {
  let array = [];
  let index = [];
  for(let i=0;i<arr.length;i++){
    if(arr[i]===-1){
      index.push(i);
    } else {
      array.push(arr[i]);
    }
  }
  let sort = array.sort((a,b)=>a-b);
  for(let k=0;k<index.length;k++){
    sort.splice(index[k], 0, -1);
  }
  return sort;
}

module.exports = {
  sortByHeight
};
