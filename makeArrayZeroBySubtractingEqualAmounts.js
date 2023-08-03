var minimumOperations = function (nums) {
  let totalOperation = 0;
  while (!nums.every((num) => num === 0)) {
    const nonZeroNums = nums.filter((num) => num != 0);
    const minNum = Math.min(...nonZeroNums);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] != 0) {
        nums[i] = nums[i] - minNum;
      }
    }
    totalOperation++;
  }
  return totalOperation;
};

// Problem link: https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/
