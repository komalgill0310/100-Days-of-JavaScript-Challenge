var sortedSquares = function (nums) {
  return nums.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
};

// Better Approach: Two pointer approach

var sortedSquares = function (nums) {
  const numsLength = nums.length;
  const sortedSquareArr = Array(numsLength);
  let left = 0;
  right = numsLength - 1;
  index = numsLength - 1;
  while (left <= right) {
    const leftSquared = nums[left] * nums[left];
    const rightSquared = nums[right] * nums[right];

    if (leftSquared > rightSquared) {
      sortedSquareArr[index] = leftSquared;
      left++;
    } else {
      sortedSquareArr[index] = rightSquared;
      right--;
    }
    index--;
  }
  return sortedSquareArr;
};

// Problem link: https://leetcode.com/problems/squares-of-a-sorted-array/
