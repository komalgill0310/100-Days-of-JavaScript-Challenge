var oddCells = function (m, n, indices) {
  const incrementMatrix = new Array(m).fill().map(() => new Array(n).fill(0));
  for (const indice of indices) {
    const [rowIndex, colIndex] = indice;
    //UPDATE ROW OF INCREMENTMATRIX
    const incrementRow = incrementMatrix[rowIndex];
    for (let i = 0; i < incrementRow.length; i++) {
      incrementRow[i]++;
    }
    //UPDATE COLUMN OF INCREMENTMATRIX
    for (let j = 0; j < incrementMatrix.length; j++) {
      incrementMatrix[j][colIndex]++;
    }
  }
  return incrementMatrix.flat(1).filter((num) => num % 2 != 0).length;
};

// Problem link: https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/description/
