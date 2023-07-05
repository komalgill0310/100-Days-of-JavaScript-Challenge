var maximumCount = function (nums) {
  let pos = 0;
  let neg = 0;
  nums.reduce((_, curr) => {
    curr > 0 && pos++;
    curr < 0 && neg++;
  }, 0);
  return Math.max(pos, neg);
};

// Problem link: https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/
