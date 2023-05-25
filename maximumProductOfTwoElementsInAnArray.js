// Breakdown:
// 1. Find the first maximum value from the array and store it in a variable called "firstMaximumNum"
// 2. Delete the firstMaximumNum from the given array by using the index of the firstMaximumNum
// 3. Find the second maximum value from the array and store it in a variable called "secondMaximumNum"
// return (firstMaximumNum - 1) * (secondMaximum - 1)

var maxProduct = function (nums) {
  const firstMaximumNum = Math.max(...nums);
  nums.splice(nums.indexOf(firstMaximumNum), 1);
  const secondMaximumNum = Math.max(...nums);
  return (firstMaximumNum - 1) * (secondMaximumNum - 1);
};

// Problem link: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
