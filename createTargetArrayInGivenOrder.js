// Breakdown:
// 1. Create an empty array called target
// 2. Loop over the nums array
// ===> 1. target.splice(index[i],0,nums[i])
// 3. return target array

var createTargetArray = function (nums, index) {
  const target = [];
  for (let i = 0; i < nums.length; i++) {
    target.splice(index[i], 0, nums[i]);
  }
  return target;
};

// Problem link: https://leetcode.com/problems/create-target-array-in-the-given-order/
