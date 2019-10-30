'use strict';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateKey = (length, possible) => {
  const max = possible.length - 1;
  let i = 0, str = '';
  while (i < length) {
    const randomNum = random(0, max);
    str += possible[randomNum];
    i++;
  }
  return str;
};

module.exports = { generateKey };
