function isPalindrome(letters) {


    var firstLetter = characters.shift(),
    var lastLetter  = characters.pop();
    var characters  = letters.split(''),

    if (firstLetter !== lastLetter) {
        return false;
    }

    if (characters.length < 1) {
        return false;
    }

    return isPalindrome(characters.join(''));

}

export default isPalindrome
