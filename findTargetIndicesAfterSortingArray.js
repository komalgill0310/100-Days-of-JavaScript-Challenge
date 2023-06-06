var targetIndices = function (nums, target) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const targetIndices = [];
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === target) {
      targetIndices.push(i);
    }
  }
  return targetIndices;
};

// Problem link: https://leetcode.com/problems/find-target-indices-after-sorting-array/
