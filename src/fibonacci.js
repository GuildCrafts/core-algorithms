export default function fibonnaci({}){

//npm test






fibonacci(10)
// => [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


fibonacci(num) => {
  var x = 1, y = 0, temp;

  while (num >= 0){
    temp = x;
    x = x + y;
    y = temp;
    num--;
  }

  return y;
}
