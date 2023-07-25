var generate = function (numRows) {
  const arr = Array(numRows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Array(i + 1);
    if (i === 0) {
      arr[i] = [1];
    } else if (i === 1) {
      arr[i].fill(1);
    } else {
      arr[i][0] = 1;
      arr[i][arr[i].length - 1] = 1;
    }
  }
  // Pascal Operation
  for (let i = 2; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1];
    }
  }
  return arr;
};

// Problem link: https://leetcode.com/problems/pascals-triangle/description/
