function lowerTriang(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
}

// Problem link: https://edabit.com/challenge/jkkhAZ2C9Zy4SHbtj
