const { NotImplementedError } = require('../extensions/index.js');

function getSeason(date) {
  if(typeof date==="undefined"){
    return 'Unable to determine the time of year!';
  }

  const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
  if(pattern.test(date)===false) {
    return "throw!ErrorInvalid date!";
  }

  const dt = new Date(date.replace(pattern,'$3-$2-$1'));

  if(dt.getMonth()<2 || dt.getMonth()===11){
    return "winter";
  } else if (dt.getMonth()<5 && dt.getMonth()>1){
    return "spring";
  } else if (dt.getMonth()<8 && dt.getMonth()>4){
    return "summer";
  } else if (dt.getMonth()<11 && dt.getMonth()>7){
    return "autumn";
  }
}

module.exports = {
  getSeason
};
