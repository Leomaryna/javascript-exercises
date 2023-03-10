const reverseString = function(str) {
    let emptyString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        emptyString += str.charAt(i);
    }
    return emptyString;
};

// Do not edit below this line
module.exports = reverseString;
