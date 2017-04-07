export default function fizzBuzz(a, b){

  var fizzBuzzarray = [];
  for (var i = 1; i < 101; i++){
  fizzBuzzarray.push(i)
  }

  for(var j = 1; j < fizzBuzzarray.length; j++) {
  if (fizzBuzzarray[j] % 3 == 0 ){
  fizzBuzzarray.splice(j, 1, "Fizz");
  }
  if (fizzBuzzarray[j] % 5 == 0){
  fizzBuzzarray.splice(j, 1, "Buzz");
  }
  if (j % 15 == 0 ){
  fizzBuzzarray.splice(j-1, 1, "FizzBuzz");
  }
  }
  return fizzBuzzarray;
  }
