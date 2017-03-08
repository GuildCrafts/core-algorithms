export default function fibonacci(nthTerm) {


let initialFibonacci = [0, 1];
let finalFibonacci = [];
if (nthTerm <= 0){
  throw new Error('error');
}
else if (nthTerm === 1){
  return initialFibonacci = [0];
}
else {
  for (var i = 2; i < nthTerm; i++){
    initialFibonacci.push(initialFibonacci[i-2]+initialFibonacci[i-1]);
  }
}

return initialFibonacci;

}
