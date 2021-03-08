const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let newArrSum = 0;
    let arrDepth = 0;
    if(Array.isArray(arr)) {
      for(let i = 0; i < arr.length; i++) {
        newArrSum = this.calculateDepth(arr[i]);
        if( newArrSum > arrDepth) {
          arrDepth = newArrSum;
        }
      }
      return (arrDepth + 1);
    } else {
      return 0;
    }
  }
};
