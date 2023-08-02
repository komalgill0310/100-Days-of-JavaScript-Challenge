var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1] && nums[i + 1] === nums[i + 2]) {
      nums.splice(i + 2, 1);
      i--;
    }
  }
};

// Problem link: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
