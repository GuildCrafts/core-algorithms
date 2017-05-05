export default function isPalindrome({string}) {



Palindrome = a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

isPalindrome

Determine if a string is a palindrome. Return true or false.

Ignore punctuation, spacing, and case sensitivity.

isPalindrome('radar')
// => true

isPalindrome('bananas')
// => false

isPalindrome('A man, a plan, a canal: Panama')
// => true



Palindrome(string) => {
    const reverseString = '';
    for(const k in string){
       reverseString += string[(string.length - k) - 1];
    }
  if(string === reverseString){
    console.log('true');
  } else {
    console.log("false");
  }
 }
}
