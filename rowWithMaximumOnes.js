var rowAndMaximumOnes = function (mat) {
  let totalOnesArr = [];
  totalOnesArr = mat.map((subArr) => subArr.filter((num) => num === 1).length);
  const maxTotalOnes = Math.max(...totalOnesArr);
  const rowIndex = totalOnesArr.indexOf(maxTotalOnes);
  return [rowIndex, maxTotalOnes];
};

// Problem link: https://leetcode.com/problems/row-with-maximum-ones/
