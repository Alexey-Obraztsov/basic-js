const { NotImplementedError } = require('../extensions/arrex.js');

/**

 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let count = [];
  let arr=[];
  let result = [];
  for(let i=0;i<names.length;i++){
    if(result.indexOf(names[i])==-1){
      count.push(0);
      arr.push(names[i]);
      result.push(names[i]);
    } else {
      let x=arr.indexOf(names[i]);
      count[x]+=1;
      let count2=count[x];
      let newname=names[i]+'('+`${(count2)}`+')';
      result.push(newname);
      arr.push(newname);
      count.push(0);
    }
  }
  return result;
} 

module.exports = {
  renameFiles
};
