// factorial
//
// Return the factorial of a number.
//
// factorial(5)
// // => 120

let factorial = num => {
  let accumulator = num
  for (let i = num; i > 1; i--) {
    accumulator = accumulator * (i - 1)
  }
  return accumulator
}

module.exports = { factorial }

//Other way:
//   var factorialElements = [num]
//   for (var i = num; i > 1; i--) {
//   factorialElements.push(i - 1)
//   }
//   return factorialElements.reduce(function(a,b){
//   return a*b
//   }, 1)
// }
