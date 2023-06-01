var sortedSquares = function (nums) {
  return nums.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
};

// Problem link: https://leetcode.com/problems/squares-of-a-sorted-array/
