var diagonalSum = function (mat) {
  const lastIndex = mat.length - 1;
  let matrixDiagonalSum = 0;
  let commonElement = 0;
  for (let i = 0, j = 0, k = lastIndex; i < mat.length; i++, j++, k--) {
    if (j === k) commonElement = mat[i][j];
    matrixDiagonalSum += mat[i][j] + mat[i][k];
  }
  return matrixDiagonalSum - commonElement;
};

// Problem link: https://leetcode.com/problems/matrix-diagonal-sum/
