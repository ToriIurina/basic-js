const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season;
  if(date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if(!Object.prototype.toString.call(date).match(['object Date'])) {
    throw new Error('Unable to determine the time of year!');
  }
  let month = date.getMonth();
  if(month == 11 || month <= 1 ) {
    season = 'winter';
  }
  if(month <= 4 && month > 1) {
    season = 'spring';
  }
  if(month <= 7 && month > 4) {
    season = 'summer';
  }
  if(month <= 10 && month > 7) {
    season = 'autumn';
  }
  return season;
};
