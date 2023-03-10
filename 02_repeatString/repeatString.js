const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let repetition = "";
    for (let i = 0; i < num; i++) {
        repetition += string;
    }
    return repetition;
};

// Do not edit below this line
module.exports = repeatString;
