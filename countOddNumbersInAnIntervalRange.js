// Brute Force

var countOdds = function (low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 != 0) count++;
  }
  return count;
};

// Problem link: https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

console.log(countOdds(3, 7));

// Optimized Solution:

var countOdds = function (low, high) {
  if (low % 2 === 0) {
    low++; // Make sure low is odd
  }
  if (high % 2 === 0) {
    high--; // Make sure high is odd
  }
  return Math.max(0, Math.floor((high - low) / 2) + 1);
};
