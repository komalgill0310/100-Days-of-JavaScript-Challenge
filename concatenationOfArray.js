// Input:
// 1. An array of integers of length n is given

// Output:
// 1. join the given array with the given array and return a new array.

// Breakdown:
// 1. Store the given array in a variable called copyOfOriginal
// 2. Use concat to join given and copy of original array and store the output in a variable called ans
// 3. return ans

var getConcatenation = function (nums) {
  const copyOfNums = nums;
  const ans = nums.concat(copyOfNums);
  return ans;
};

// Problem link: https://leetcode.com/problems/concatenation-of-array/
