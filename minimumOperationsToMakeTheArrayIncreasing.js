var minOperations = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] >= nums[i + 1]) {
      let num = nums[i] - nums[i + 1] + 1;
      count += num;
      nums.splice(i + 1, 1, num + nums[i + 1]);
    }
  }
  return count;
};

// Problem link: https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/description/
