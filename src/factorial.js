// factorial
//
// Return the factorial of a number.
//
// factorial(5)
// // => 120

export default function factorial(num) {
  var accumulator = num
  for (var i = num; i > 1; i--) {
    accumulator = accumulator * (i - 1)
  }
  return accumulator
}

//Other way:
//   var factorialElements = [num]
//   for (var i = num; i > 1; i--) {
//   factorialElements.push(i - 1)
//   }
//   return factorialElements.reduce(function(a,b){
//   return a*b
//   }, 1)
// }
