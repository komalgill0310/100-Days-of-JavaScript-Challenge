var sumOfSquares = function (nums) {
  let totalSumOfSquares = 0;
  const n = nums.length;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      totalSumOfSquares += nums[i - 1] * nums[i - 1];
    }
  }
  return totalSumOfSquares;
};

// Problem link: https://leetcode.com/problems/sum-of-squares-of-special-elements/description/
