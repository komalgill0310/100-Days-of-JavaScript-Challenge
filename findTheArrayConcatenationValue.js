var findTheArrayConcVal = function (nums) {
  if (nums.length === 1) return nums[0];
  let totalConcatenationValue = 0;
  if (nums.length % 2) {
    const middleIndex = Math.floor(nums.length / 2);
    totalConcatenationValue += nums[middleIndex];
    nums.splice(middleIndex, 1);
  }
  // Get concatenated Numbers
  for (let i = 0; i < nums.length; i++) {
    totalConcatenationValue += Number(
      String(nums[i]) + String(nums[nums.length - 1])
    );
    nums.splice(0, 1);
    nums.splice(-1, 1);
    i--;
  }
  return totalConcatenationValue;
};

// Problem link: https://leetcode.com/problems/find-the-array-concatenation-value/
