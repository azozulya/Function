'use strict';

// Introspect all properties of iface object and
// extract function names and number of arguments
// For example: {
//   m1: x => [x],
//   m2: function (x, y) {
//     return [x, y];
//   },
//   m3(x, y, z) {
//     return [x, y, z];
//   }
// will return: [
//   ['m1', 1],
//   ['m2', 2],
//   ['m3', 3]
// ]

const methods = iface => {
  const keys = Object.keys(iface);
  const res = [];
  keys.forEach(el => {
    const argsNumber = iface[el].length;
    res.push([el, argsNumber]);
  });
  return res;
};

module.exports = { methods };
