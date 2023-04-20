const repeatString = function(str, i) {
    word = ""
    if (i < 0) return "ERROR";
    for (let j = 0; j < i; j++) {
        word += str;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
