const palindromes = (word) => {

    fixedstring = word.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    return fixedstring.split("").reverse().join("") == fixedstring;
}

// Do not edit below this line
module.exports = palindromes;
