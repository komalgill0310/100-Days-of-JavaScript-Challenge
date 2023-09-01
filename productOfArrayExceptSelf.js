var productExceptSelf = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (j != i) {
        product *= nums[j];
      }
    }
    result[i] = product;
  }
  return result;
};

// Problem link: https://leetcode.com/problems/product-of-array-except-self/description/
