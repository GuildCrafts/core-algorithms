export default function isPalindrome(string) {

  let parsedString = string.toLowerCase();
  parsedString = parsedString.match(/[a-z]/g);

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
