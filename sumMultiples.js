// Breakdown:
// 1. Create a variable called multiplesSum and initialize it to 0
// 2. use while loop to check if n > 2
// ===> 1. if n is divisible by either 3 or 5 or 7
// ========> 1. add the n to multiplesSum
// ===> 2. subtract one from n
// 3. Return multiplesSum

var sumOfMultiples = function (n) {
  let multiplesSum = 0;
  while (n > 2) {
    if (n % 3 === 0 || n % 5 === 0 || n % 7 === 0) {
      multiplesSum += n;
    }
    n--;
  }
  return multiplesSum;
};

// Problem link: https://leetcode.com/problems/sum-multiples/
