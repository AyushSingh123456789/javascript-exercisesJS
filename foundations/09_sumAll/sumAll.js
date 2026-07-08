const sumAll = function (n1, n2) {
    let sum = 0;
    let orig = 0;
    if ((Number.isInteger(n1) && Number.isInteger(n2)) && (n1 > 0 && n2 > 0)) {
        if (n1 > n2) {
            sum = n1;
            orig = n2;
        }
        else if (n2 > n1) {
            sum = n2;
            orig = n1;
        }
        else {
            return n1;
        }
        for (let i = sum; i > orig; i--) {
            sum = sum + (i - 1);
        }
    }
    else {
        return "ERROR";
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
