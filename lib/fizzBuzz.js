'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fizzBuzz;
function fizzBuzz() {
  var arrayNums = [];
  for (var i = 1; i < 101; i++) {
    arrayNums.push(i);
  }

  for (var i = 1; i < arrayNums.length; i++) {
    if (arrayNums[i] % 3 == 0) {
      arrayNums.splice(i, 1, "Fizz");
    }
    if (arrayNums[i] % 5 == 0) {
      arrayNums.splice(i, 1, "Buzz");
    }
    if (i % 15 == 0) {
      arrayNums.splice(i - 1, 1, "FizzBuzz");
    }
  }
  return arrayNums;
}