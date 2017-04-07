export default function isPalindrome(string) {
    if(typeof(string) !== 'string') {
      throw "input not a string"
    }
const punctuation = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
const lowerCase = punctuation.replace(/\s/g,'').toLowerCase();
const splitString = lowerCase.split('');
const backwards = splitString.reverse().join('')

return backwards === lowerCase



}
