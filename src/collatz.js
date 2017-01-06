const collatz = (start) => {

  let array = [];

  const doCollatz = (n) => {
    array.push(n);

    if (n === 1){
      return 1
    }
    if(n % 2 != 0) {
      n = (n * 3) + 1;
      array.push(n);
    }
    if (n % 2 === 0) {
      n = n/2;
    }
    doCollatz(n)
  }

  doCollatz(start)

  console.log(array)
  return array
}
export default collatz
