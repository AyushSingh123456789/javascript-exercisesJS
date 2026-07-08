const removeFromArray = function (arr, ...manyMoreArgs) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (const item of manyMoreArgs) {
            if (arr[i] === item) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
    // The array "arr" shrinks when an element is removed from it, which is also present inside the array "manyMoreArgs".
};
// let arr = [1, 2, 3, 4]
// let num = 3;
// const result = removeFromArray(arr, num);
// console.log(result);

// Do not edit below this line
module.exports = removeFromArray;
