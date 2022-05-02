const { NotImplementedError } = require('../extensions/index.js');

function getDNSStats(domains ) {
  let arr={};
  let usedDomains=[];
  let domainsCount=[];
  for (let i = 0; i < domains.length; i++) {
    let splitDomain=domains[i].split(".").reverse();
    let str="";
    for (let x = 0; x < splitDomain.length; x++) {
      str+="."+splitDomain[x];
      if (usedDomains.indexOf(str)==-1) {
        usedDomains.push(str);
        domainsCount.push(1);
      } else {
        let index=usedDomains.indexOf(str);
        domainsCount[index]++;
      }
    }
  }
  for (let i = 0; i < usedDomains.length; i++) {
    arr[usedDomains[i]]=domainsCount[i];
  }
  return arr;
}

module.exports = {
  getDNSStats
};
