// OLD WAY

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
};

// A BETTER APPROACH

var removeDuplicates = function (nums) {
  let uniqueCount = 1;
  j = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element !== nums[j]) {
      j++;
      nums[j] = nums[i];
      uniqueCount++;
    }
  }
  return uniqueCount;
};

// Problem link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
