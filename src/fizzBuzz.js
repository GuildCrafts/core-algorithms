var _= require('underscore')

function fizzBuzz () {
 var newArr = [];
 for (var i = 1; i <= 100; i ++) {
   if( i % 15 === 0) {
    newArr.push("FizzBuzz");
   } else if (i % 3 === 0) {
     newArr.push("Fizz");
   } else if( i % 5 === 0) {
     newArr.push("Buzz");
   } else {
     newArr.push(i);
   }
  }
  return newArr;
  }


export default fizzBuzz;
