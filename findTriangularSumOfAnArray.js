var triangularSum = function (nums) {
  if (nums.length === 1) return nums[0];
  while (nums.length > 1) {
    const newNums = Array(nums.length - 1);
    for (let i = 0; i < nums.length - 1; i++) {
      newNums[i] = (nums[i] + nums[i + 1]) % 10;
    }
    nums = [...newNums];
  }
  return nums[0];
};

// Problem link: https://leetcode.com/problems/find-triangular-sum-of-an-array/description/
