export default function isPalindrome(str){
  var a = str.replace(/[\W_]/g, '').toLowerCase();
  var z = a.split("").reverse().join("");
  return a === z;
}

isPalindrome('radar');
isPalindrome('bananas');
isPalindrome('A man, a plan, a canal: Panama');
