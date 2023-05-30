var arrayPairSum = function (nums) {
  const sortedArray = [...nums].sort((a, b) => a - b);
  const pairs = [];
  for (let i = 0; i < sortedArray.length; i += 2) {
    pairs.push([sortedArray[i], sortedArray[i + 1]]);
  }
  return pairs.reduce((total, pair) => total + Math.min(...pair), 0);
};

// Problem link: https://leetcode.com/problems/array-partition/
