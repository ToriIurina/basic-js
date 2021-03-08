const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('error');
    }
    let alf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let m = message.toUpperCase();
    let k = key.toUpperCase();
    let result = '';
    let mi;
    let ki;
    let j = 0;
    let i = 0;
    let c;
    let maxlength = Math.max(m.length, k.length);
    while (i < maxlength) {
      if (i >= m.length) {
        break;
      } else {
        mi = alf.indexOf(m[i]);
      }
      if (mi === -1) {
        result += m[i];
        i++;
        continue;
      }
      ki = alf.indexOf(k[j >= k.length ? j % k.length : j]);
      c = alf[(alf.length + (mi + ki)) % 26];
      result += c;
      i++;
      j++;
    }
    if (!this.direct) {
      return result.split('').reverse().join('');
    }
    return result;
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('error');
    }
    let alf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let m = message.toUpperCase();
    let k = key.toUpperCase();
    let result = '';
    let mi;
    let ki;
    let j = 0;
    let i = 0;
    let c;
    let maxlength = Math.max(m.length, k.length);
    while (i < maxlength) {
      if (i >= m.length) {
        break;
      } else {
        mi = alf.indexOf(m[i]);
      }
      if (mi === -1) {
        result += m[i];
        i++;
        continue;
      }
      ki = alf.indexOf(k[j >= k.length ? j % k.length : j]);
      c = alf[(alf.length + (mi - ki)) % 26];
      result += c;
      i++;
      j++;
    }
    if (!this.direct) {
      return result.split('').reverse().join('');
    }
    return result;
  }
}

module.exports = VigenereCipheringMachine;
