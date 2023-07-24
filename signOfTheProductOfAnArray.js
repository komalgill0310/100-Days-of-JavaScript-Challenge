var arraySign = function (nums) {
  const product = nums.reduce((total, num) => total * num, 1);
  return signFunc(product);
};

function signFunc(num) {
  return num < 0 ? -1 : num > 0 ? 1 : 0;
}

// Problem link: https://leetcode.com/problems/sign-of-the-product-of-an-array/
