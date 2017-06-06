function assembleFibonacci(nth) {
  let a = 0, b = 1, f = 1;
  let fibonacciArray = [a,b];
      for (let i = 2; i < nth; i++) {
        f = a + b;
        a = b;
        b = f;
        fibonacciArray.push(f);
       }
   return fibonacciArray;
}
console.log(assembleFibonacci(10));
