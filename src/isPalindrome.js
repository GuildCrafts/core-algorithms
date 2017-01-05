'use strict'
export default function isPalindrome(str) {
  let noPunct = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let normalized = noPunct.replace(/\s/g,'');
  let splitString = normalized.split('');
  let backwards = splitString.reverse().join('');

  return backwards === normalized

  }
  isPalindrome("radar");
isPalindrome("radar");
