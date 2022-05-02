const { NotImplementedError } = require('../extensions/index.js');

function calculateHanoi(disksNumber, turnsSpeed) {
  let turns=0;
  for(let i=0;i<disksNumber;i++){
    turns*=2;
    turns++;
  }
  turnsSpeed=turnsSpeed/3600;
  let second=Math.floor(turns/turnsSpeed);
  let object = {
    'turns': turns,
    'second': second
  }
  return object;
}

module.exports = {
  calculateHanoi
};
