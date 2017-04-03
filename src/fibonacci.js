export default function fibonacci(num) {
  if (num === 1) {
   return [0, 1];
  }
 else {
   let fib = fibonacci(num - 1);
   fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
   return fib;
  }
}
