var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  for (let i = 0; i < nums.length - 1; i++) {
    const numA = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const numB = nums[j];
      if (
        i != j &&
        Math.abs(i - j) <= indexDiff &&
        Math.abs(numA - numB) <= valueDiff
      ) {
        return true;
      }
    }
  }
  return false;
};

// Problem link: https://leetcode.com/problems/contains-duplicate-iii/description/
