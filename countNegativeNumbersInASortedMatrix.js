var countNegatives = function (grid) {
  return grid.flat().filter((num) => num < 0).length;
};

// Problem link: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
