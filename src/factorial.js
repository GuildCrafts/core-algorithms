export default function factorial(integer){
  if (integer === 0) {
    return 1; 
  }
  if (integer === 1) {
   return integer;
  } else {
   return integer * factorial (integer - 1);
  }
}
