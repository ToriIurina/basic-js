const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: '',
  getLength() {
    return this.str.split(' )~~( ').length;
  },
  addLink(value) {
    if(value === undefined) {
      value = '';
    }
    (this.str !== '') ? this.str += '~~( ' + value + ' )' : this.str += '( ' + value + ' )';
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' && (position ^ 0) !== position) {
      this.str = '';
      throw new Error('error');
    }
    let arr = this.str.split('~~');
    arr.splice(position - 1, 1);
    this.str = arr.join('~~');
    return this;

  },
  reverseChain() {
    this.str = this.str.split('~~').reverse().join('~~');
    return this;

  },
  finishChain() {
    let resultStr = this.str;
    this.str = '';
    return resultStr;
  }
};

module.exports = chainMaker;
