export default function factorial(n){
    if(n === 0){
      return 1;
    }
    n=n*factorial(n-1);
    return n;
  };

module.exports = factorial
