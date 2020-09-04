// function to reverse a string
function reverseString(str) {
    // Medthod #1
    // let strArr = str.split("");
    // let strArrReversed = strArr.reverse();
    // let strReversed = strArrReversed.join("");
    // return strReversed;
    // Method #2 (shorthand)
    return str.split("").reverse().join("");
    // Method #3
    // let final = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     final += str[i];
    // }
    // return final;
}

console.log(reverseString("Hello"));
