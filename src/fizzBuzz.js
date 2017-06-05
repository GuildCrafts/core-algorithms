export default function fizzBuzz() {
  var array = [];
  var i;
  for (i=1; i < 101; i++) {
    array.push(i);
  }
  for (var j = 0; j <= array.length; j++)
      if (array[j]%3 === 0 && array[j] % 5 === 0) {
      array.splice(j, 1, "FizzBuzz");
    } else if (array[j]%3 === 0) {
      array.splice(j, 1, "Fizz");
    } else if (array[j]%5 === 0) {
      array.splice(j, 1, "Buzz");
    }
  return array;
}

fizzBuzz();

module.exports = fizzBuzz
