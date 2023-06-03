var findGCD = function (nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const divisorArr = [];
  for (let i = 1; i <= min; i++) {
    divisorArr.push(i);
  }
  divisorArr.sort((a, b) => b - a);
  for (let i = 0; i < divisorArr.length; i++) {
    if (min % divisorArr[i] === 0 && max % divisorArr[i] === 0) {
      return divisorArr[i];
    }
  }
};

// Problem link: https://leetcode.com/problems/find-greatest-common-divisor-of-array/

// BY EUCLIDEAN ALGORITHM

// Here's how the Euclidean algorithm works:
// a = maximum, b = minimum

// 1. Given two numbers, a and b, assume that a is greater than or equal to b.
// 2. Divide a by b and find the remainder, r.
// 3. If r is 0, then b is the GCD of a and b. You have found the solution.
// 4. If r is not 0, set a to b and b to r. Then, go back to step 2 and repeat the process.

// By repeating steps 2 to 4, you continuously reduce the numbers until the remainder becomes 0. At that point, the previous value of b will be the GCD of the original two numbers, a and b.

var findGCD = function (nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  return gcd(max, min);
};
