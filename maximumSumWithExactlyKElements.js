// Breakdown:
// 1. Create a variable called maxSum = 0
// 2. Find the maximum number from the given array and store it in a variable called "maxNum"
// 3. Use while to perform the opertion till k > 0
// ===> 1. maxSum += maxNum
// ===> 2. maxNum++
// ===> 3. k--
// 4. return maxSum

var maximizeSum = function (nums, k) {
  let maxSum = 0;
  let maxNum = Math.max(...nums);
  while (k > 0) {
    maxSum += maxNum;
    maxNum++;
    k--;
  }
  return maxSum;
};

// Problem link: https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/
