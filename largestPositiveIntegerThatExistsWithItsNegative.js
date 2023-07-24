var findMaxK = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const maxNum = Math.max(...nums);
    if (nums.includes(-maxNum)) {
      return maxNum;
    }
    nums.splice(nums.indexOf(maxNum), 1);
    i--;
  }
  return -1;
};

// Problem link: https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
