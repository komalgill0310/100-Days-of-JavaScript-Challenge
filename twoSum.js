// OLD WAY

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (nums[i] != diff) {
      if (nums.includes(diff)) {
        return [i, nums.indexOf(diff)];
      }
    }
    if (nums[i] === diff) {
      if (i != nums.lastIndexOf(diff)) {
        return [i, nums.lastIndexOf(diff)];
      }
    }
  }
};

// NEW WAY

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    let curr = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const next = nums[j];
      if (curr + next === target) {
        return [i, j];
      }
    }
  }
};

// Problem link: https://leetcode.com/problems/two-sum/description/
