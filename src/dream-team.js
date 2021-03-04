const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let a = [];
  let b = [];
  let c = [];
  let d;
  if(Array.isArray(members) && members.length === 0) {
    return null;
  } else if (Array.isArray(members)) {
    members.forEach(function (item) {
      if(typeof item === 'string') {
        a.push(item);
      }
    });
    d =  a.toString().replace(/ /g,"").split(",");
    d.forEach(function (item) {
      b.push(item[0].toUpperCase());
    })
    c = b.sort().join('');
    return c;
  } else {
    return false;
  }
};
