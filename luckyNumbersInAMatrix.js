var luckyNumbers = function (matrix) {
  const luckyNumArr = [];
  for (let i = 0; i < matrix.length; i++) {
    const col = [];
    const min = Math.min(...matrix[i]);
    const minIndex = matrix[i].indexOf(min);
    for (let j = 0; j < matrix.length; j++) {
      col.push(matrix[j][minIndex]);
    }
    if (min === Math.max(...col)) {
      luckyNumArr.push(min);
    }
  }
  return luckyNumArr;
};

// Problem link: https://leetcode.com/problems/lucky-numbers-in-a-matrix/description/
