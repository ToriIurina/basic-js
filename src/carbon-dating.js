const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
    let sampleActivityNum = +sampleActivity;
    if( sampleActivityNum > 0 ) {
      let top = Math.log(MODERN_ACTIVITY / sampleActivityNum);
      if(top < 0) {
        return false;
      }
      let a = top/0.693;
      let result = a * HALF_LIFE_PERIOD;
      return Math.ceil(result);
    } else {
      return false;
    }
  } else {
    return false;
  }
};
