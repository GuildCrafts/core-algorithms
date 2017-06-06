export default let list = new Array(100);

  for (let i = 0; i < 100; i++) {
      list[i] = i + 1; // $$c populates the array. +1 is necessary because arrays are 0 index based and you want to store 1 - 100 in it, NOT 0-99.{

        //list[i] is equal to an index in the array
             if (list[i] % 5 === 0 && list[i] % 3 === 0) { // populate multiples of both five && three with "FIZZBUZZ"
               list[i] = "FizzBuzz"
             } else if (list[i] % 5 === 0) { // populate multiples of five with "BUZZ"
                 list[i] = "Buzz"
               } else if (list[i] % 3 === 0) {  // populate multiples of three with "FIZZ"
                  list[i] = "Fizz"
                 }
  }
