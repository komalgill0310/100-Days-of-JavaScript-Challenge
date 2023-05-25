var countKDifference = function (nums, k) {
  let totalNumOfPairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        totalNumOfPairs++;
      }
    }
  }
  return totalNumOfPairs;
};

// Problem link: https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
