'use strict';

let repeat;
const left = a => {
  if (repeat > 0) {
    for (let j = repeat; j > 0; j--) {
      a <<= 8;
    }
    repeat--;
  }
  return a;
};

const ipToInt = (ip = '127.0.0.1') => {
  repeat = 3;
  const mas = ip.split('.').map(el => parseInt(el));
  return mas.map(el => left(el)).reduce((a, b) => a + b);
};

module.exports = { ipToInt };
