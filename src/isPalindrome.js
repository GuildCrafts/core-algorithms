export default function isPalindrome(string) {
  //code here
  let parsedString = string.toLowerCase();
  parsedString = parsedString.match(/[a-z]/g);

  // we parse string to eliminate spaces, numbers and special characters
  let test = false;
  for (let i = 0; i < parsedString.length / 2; i++) {
    if (i === 0 && parsedString[i] === parsedString[parsedString.length - 1]) {
      test = true;
    }
   if (parsedString[i] === parsedString[parsedString.length - i - 1]) {
      test = true;
    }
  }
  return test;
}
