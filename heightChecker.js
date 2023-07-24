var heightChecker = function (heights) {
  const expectedOrder = [...heights].sort((a, b) => a - b);
  return heights.filter((height, i) => height != expectedOrder[i]).length;
};

// Problem link: https://leetcode.com/problems/height-checker/
