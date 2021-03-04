const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let catsSum = 0;
  backyard.forEach(function (item) {
    item.forEach(function (point) {
      if(point === '^^') {
        catsSum = catsSum + 1;
      }
    })
  });
  return catsSum;
};
