const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(members) {
  let team=[];
  for(let i=0;i<members.length;i++){
    if(typeof members[i]==='string' && isNaN(parseInt(members[i]))){
     let letters=members[i].split('');
     team.push(letters[0]);
    } 
  } 
  if(team.length==0){
    return false;
  }
  return team.sort().join('').toUpperCase();
} 

module.exports = {
  createDreamTeam
};
