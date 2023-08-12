var mySqrt = function (x) {
  return Math.floor(Math.sqrt(x));
};

// Optimized Solution:

var mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x;
  }

  let num = 0;
  while (num * num <= x) {
    num++;
  }

  return num - 1;
};

// Problem link: https://leetcode.com/problems/sqrtx/description/
