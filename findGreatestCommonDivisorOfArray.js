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
