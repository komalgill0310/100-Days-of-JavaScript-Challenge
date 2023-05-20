// Breakdown:
// 1. sort the array in ascending order.
// 2. Multiply the last two numbers from an array and store it in a variable called maxProduct
// 3. Multiply the first two numbers from an array and store it in a variable called minProduct
// 4. return the difference of maxProduct - minProduct

var maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);
  const maxProduct = nums.slice(-1) * nums.slice(-2, -1);
  const minProduct = nums[0] * nums[1];
  return maxProduct - minProduct;
};

//Problem link: https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
