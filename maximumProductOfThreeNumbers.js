var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const product1 = nums[0] * nums[1] * nums[n - 1]; // Product of two smallest numbers and the largest number
  const product2 = nums[n - 1] * nums[n - 2] * nums[n - 3]; // Product of three largest numbers

  return Math.max(product1, product2);
};

// solution is failing if length is greater

// Problem link: https://leetcode.com/problems/maximum-product-of-three-numbers/
