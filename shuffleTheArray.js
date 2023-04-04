// Input: an array of integers of length even in the form [x1,x2,...,xn,y1,y2,...,yn]

// Output:
// 1. return a new array in the form [x1,y1,x2,y2,...,xn,yn]

// Breakdown:
// 1. slice the array from 0 till n and store in an array called numsX
// 2. slice the array from n till length and store in an array called numsY
// 3. Use flatMap on numsX
// ==> 1. for each value of numsX => [numsX's value, numsY's value]
// 4. return the output from flatMap

var shuffle = function (nums, n) {
  const numsX = nums.slice(0, n);
  const numsY = nums.slice(n);
  return numsX.flatMap((num, i) => [num, numsY[i]]);
};

// Problem link: https://leetcode.com/problems/shuffle-the-array/
