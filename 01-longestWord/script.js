const longestWord = (str) => {
    let words = str.split(" ");
    let long = "";
    for (let word of words) {
        if (word.length > long.length) {
            long = word;
        }
    }
    return long;
};

console.log(longestWord("this is the longest word that i can write."));
