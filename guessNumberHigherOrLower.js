var guessNumber = function (n) {
  while (n > 0) {
    if (guess(n) === 0) {
      return n;
    }
    n--;
  }
};

// Problem link: https://leetcode.com/problems/guess-number-higher-or-lower/description/
