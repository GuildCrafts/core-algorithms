export default function fibonacci(num) {
  var a = 0;
  var b = 1;
  var arr = [];
  var temp;
  if (typeof num === 'string') {
    return "Invalid entry, please enter a number";
  } else {
   for (var i = 1; i <= num; i++){
     temp = a;
     a = a + b; //we calculate the next number by adding the current number to the old number
     b = temp;
     arr.push(b);//We push the fibonacci number into a empty variable
  }
}
  return arr;
};

module.exports = fibonacci
