function fibonacci(num){
  var a = 1;
  var b = 0;
  arr = [];
  var temp;
  
    for(var i = num; num >= 0; i--){
      temp =a;
      a = a + b; //we calculate the next number by adding the current number to the old number
      b = temp;
      arr.push(b);//We push the fibonacci number into a empty variable 
      num--;
    }
    return arr;
}
fibonacci(10);