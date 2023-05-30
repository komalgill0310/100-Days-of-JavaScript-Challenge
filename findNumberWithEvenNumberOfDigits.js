var findNumbers = function (nums) {
  return nums.reduce(
    (evenCount, num) => evenCount + (String(num).length % 2 === 0 ? 1 : 0),
    0
  );
};

// Problem link: https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
