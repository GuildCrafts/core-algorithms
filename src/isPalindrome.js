export default function isPalindrome(str) {
  var ignore = /[\W_]/g;
  var newStr = str.toLowerCase().replace(ignore, '');
  var reverseStr = newStr.split('').reverse().join('');
  return reverseStr === newStr;
};


module.exports = isPalindrome
