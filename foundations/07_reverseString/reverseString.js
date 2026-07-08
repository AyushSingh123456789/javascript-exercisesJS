const reverseString = function (str) {
    let stra = "";
    while (str.length > 0) {
        let lastChar = str.slice(-1);
        str = str.slice(0, -1);
        stra += lastChar;
    }
    return stra;
};
let str = 'Hello';
const result = reverseString(str);
console.log(result);

// Do not edit below this line
module.exports = reverseString;
