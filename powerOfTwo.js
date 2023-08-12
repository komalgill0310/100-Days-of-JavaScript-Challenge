var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false;
  }
  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
};

// Problem link:https://leetcode.com/problems/power-of-two/description/
