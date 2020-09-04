// Capitalize First Letter
function capitalizeWords(str) {
    // let words = str.split(" ").map((word) => {
    //     let firtstLetter = word.slice(0, 1).toUpperCase();
    //     let rest = word.slice(1);
    //     return `${firtstLetter}${rest}`;
    // });

    let words = str.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return words.join(" ");
}
console.log(capitalizeWords("hello from the other side"));
