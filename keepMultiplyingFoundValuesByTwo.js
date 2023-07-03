var findFinalValue = function (nums, original) {
  let totalMultiplierValue = original;
  while (nums.includes(totalMultiplierValue)) {
    totalMultiplierValue *= 2;
  }
  return totalMultiplierValue;
};

// Problem link: https://leetcode.com/problems/keep-multiplying-found-values-by-two/description/
