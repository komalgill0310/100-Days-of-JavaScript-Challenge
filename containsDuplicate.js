var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    const prev = nums[i];
    const next = nums[i + 1];
    if (prev === next) {
      return true;
    }
  }
  return false;
};

// Problem link: https://leetcode.com/problems/contains-duplicate/description/
