var trimMean = function (arr) {
  arr.sort((a, b) => a - b);
  const numOfElementsToRemove = arr.length * 0.05;
  const sum = arr
    .slice(numOfElementsToRemove, -numOfElementsToRemove)
    .reduce((total, current) => total + current, 0);
  const mean = sum / (arr.length - 2 * numOfElementsToRemove);
  return mean.toFixed(5);
};

// Problem link: https://leetcode.com/problems/mean-of-array-after-removing-some-elements/description/
