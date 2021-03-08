const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let repeatTimes = 1;
    let separator = '+';
    let addition = '';
    let additionRepeatTimes = 1;
    let additionSeparator = '|';
    let newString = '';

  if(options.separator) {
    separator = options.separator;
  }
  if(options.additionSeparator) {
    additionSeparator = options.additionSeparator;
  }
  if(options.repeatTimes > 1) {
    repeatTimes = options.repeatTimes;
  }
  if(options.additionRepeatTimes > 1) {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  if("addition" in options) {
    addition = options.addition;
  }
  for(let i = 0; i < repeatTimes; i++) {
    newString += str;
    if(addition !== '') {
      for(let j = 0; j < additionRepeatTimes; j++) {
        newString += addition;
        if( j+1 !== additionRepeatTimes) {
          newString += additionSeparator;
        }
      }
    }
    if( i+1 !== repeatTimes) {
      newString += separator;
    }
  }
  return newString;

};
