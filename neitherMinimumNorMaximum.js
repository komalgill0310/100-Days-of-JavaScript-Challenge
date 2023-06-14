var findNonMinOrMax = function (nums) {
  nums.sort((a, b) => a - b);
  if (nums.length < 3) return -1;
  return nums.length % 2 === 0
    ? nums[nums.length / 2]
    : nums[Math.floor(nums.length / 2)];
};

// Problem link: https://leetcode.com/problems/neither-minimum-nor-maximum/
