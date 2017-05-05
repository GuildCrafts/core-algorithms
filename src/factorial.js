export default function factorial {()} {


Factorial = the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24.



Return the factorial of a number.

factorial(5)
// => 120



factorial (x) =>
       if(x === 0) {
           return 1;
       }
       if(x < 0 ) {
           return undefined;
       }
       for(var i = x; --i; ) {
           x *= i;
       }
       return x;
}
