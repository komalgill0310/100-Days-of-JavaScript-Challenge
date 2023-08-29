var addToArrayForm = function (num, k) {
  const numBigInt = BigInt(num.join(""));
  const numAddition = numBigInt + BigInt(k);
  return Array.from(String(numAddition), Number);
};

// Problem link: https://leetcode.com/problems/add-to-array-form-of-integer/description/
