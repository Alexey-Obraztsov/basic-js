const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


function dateSample(sampleActivity) {
    if(typeof sampleActivity!=="string" || isNaN(parseInt(sampleActivity))){
      return false;
    } else {
      let k=Math.LN2/HALF_LIFE_PERIOD;
      let t=Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))/k);
      return t;
    }
}

module.exports = {
  dateSample
};
