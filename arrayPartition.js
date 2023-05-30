var arrayPairSum = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const pairedArr = [];
  for (let i = 0; i < sortedNums.length; i += 2) {
    pairedArr.push([sortedNums[i], sortedNums[i + 1]]);
  }
  return pairedArr.reduce((total, subArr) => total + Math.min(...subArr), 0);
};

// Problem link: https://leetcode.com/problems/array-partition/
