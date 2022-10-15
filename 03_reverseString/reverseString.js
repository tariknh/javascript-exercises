const reverseString = function(word) {
    const wordSplit = word.split("");
    const reverseArray = wordSplit.reverse();
    return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
