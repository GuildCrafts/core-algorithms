export default function fizzBizz(){
    let hola = [];
  for(var i = 1; i <= 100; i++){
   if(i % 15 === 0){
      hola.push('FizzBizz');
  } else if(i % 5 === 0){
      hola.push('Fizz');
  } else if(i % 3 === 0){
      hola.push('Bizz');
  }
  else {
      hola.push(i);
    }
  }
  return hola;
}

fizzBizz(100);
