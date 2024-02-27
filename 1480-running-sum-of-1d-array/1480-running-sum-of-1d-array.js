/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++){
        result.push(nums.slice(0, i+1).reduce((arr, el) => arr + el , 0));
    }
    return result;
};