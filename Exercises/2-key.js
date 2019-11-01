'use strict';

const generateKey = (length, possible) => {
  const max = possible.length - 1;
  let i = 0, str = '';
  while (i < length) {
    const idx = Math.floor(Math.random() * max);
    str += possible[idx];
    i++;
  }
  return str;
};

module.exports = { generateKey };
