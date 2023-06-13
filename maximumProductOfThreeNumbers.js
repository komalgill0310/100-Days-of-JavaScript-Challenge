var maximumProduct = function (nums) {
  if (!nums.every((num) => num < 0)) {
    nums = nums.map((num) => (num < 0 ? Math.abs(num) : num));
  }
  const maxNum1 = Math.max(...nums);
  nums.splice(nums.indexOf(maxNum1), 1);
  const maxNum2 = Math.max(...nums);
  nums.splice(nums.indexOf(maxNum2), 1);
  const maxNum3 = Math.max(...nums);
  nums.splice(nums.indexOf(maxNum3), 1);
  console.log(maxNum1, maxNum2, maxNum3);
  return maxNum1 * maxNum2 * maxNum3;
};

// FEW TEST CASES ARE FAILING

// Problem link: https://leetcode.com/problems/maximum-product-of-three-numbers/
