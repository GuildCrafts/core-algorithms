'use strict'
export default function factorial(n){
//take a number
//recursively subtract one
//multiply the previous number by the current number
if(n === 0){
  return 1;
}
return n * factorial(n-1)


// recursion stopping point is when currentNumber is equal to zero
}
