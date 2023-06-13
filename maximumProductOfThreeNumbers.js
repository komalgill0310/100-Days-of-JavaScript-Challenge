var maximumProduct = function (nums) {
  let maxProduct = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const product = nums[i] * nums[j] * nums[k];
        if (product > maxProduct) {
          maxProduct = product;
        }
      }
    }
  return maxProduct;
};

// solution is failing if length is greater

// Problem link: https://leetcode.com/problems/maximum-product-of-three-numbers/
