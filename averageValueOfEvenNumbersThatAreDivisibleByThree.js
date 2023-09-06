var averageValue = function (nums) {
  const divisibleBy3 = nums.filter((num) => num % 2 === 0 && num % 3 === 0);
  const length = divisibleBy3.length;
  const avg = length
    ? divisibleBy3.reduce((total, curr) => total + curr, 0) / length
    : length;
  return Math.floor(avg);
};

// Problem link: https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/description/
