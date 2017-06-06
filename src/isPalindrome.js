
function isPalindrome(str) {

  str = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let palindrome = str.split("").reverse().join("");
    if (str === palindrome) {
      return true;
    } else {
      return false;
      }
}

/*console.log(

  isPalindrome('radar')
   => true

  isPalindrome('bananas')
   => false

  isPalindrome('A man, a plan, a canal: Panama')
   => true
   isPalindrome("A man, a plan, a canal: Panama")); */
