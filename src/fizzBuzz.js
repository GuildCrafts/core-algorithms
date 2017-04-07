export default function fizzBuzz() {

  let count = 1;
  let array100 = [];
  function generator100() {
    while (count < 101) {
      array100.push(count);
      count++;
    }
  }
  generator100();

  let countFizz = 0;
  let countBuzz = 0;
  let countFizzBuzz = 0;

  for (let i = 0; i < array100.length; i++){
    if(array100[i]%15 === 0){
      array100[i] = "FizzBuzz";
      countFizzBuzz++;
    }
    else if(array100[i]%5 === 0){
      array100[i] = "Buzz";
      countBuzz++;
    }
    else if (array100[i]%3 === 0){
      array100[i] = "Fizz";
      countFizz++;
    }
  }
  return array100;
}
