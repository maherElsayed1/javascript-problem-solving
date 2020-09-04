// Palindrome is a word or sentence that is spelled the same way both forward and backward, ignoring punctuation, case and spacing
function palindrome(str) {
    let reg = /[\W_]/g;
    let smallStr = str.toLowerCase().replace(reg, "");

    let strReversed = smallStr.split("").reverse().join("");
    if (smallStr === strReversed) {
        return true;
    }
    return false;
}

console.log(palindrome("race car"));
