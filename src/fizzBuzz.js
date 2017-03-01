export default function fizzBuzz(){
  var array = [];
    for (var i = 1; i < 101; i++){
      array.push(i);
    }
    for (var i = 0; i<array.length; i++){
      if (array[i] % 3 === 0 && array[i] % 5 !== 0){
        array.splice(i, 1, 'Fizz');
      }
      if (array[i] % 5 === 0 && array[i] % 3 !== 0){
        array.splice(i, 1, 'Buzz');
      }
      if (array[i] % 3 === 0 && array[i] % 5 === 0){
        array.splice(i, 1, 'FizzBuzz');
      }
    }
    return array;
}
