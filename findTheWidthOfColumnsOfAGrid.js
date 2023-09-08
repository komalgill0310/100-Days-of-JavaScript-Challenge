// Incorrect solution: Still some cases are failing

var findColumnWidth = function (grid) {
  const width = [];
  const m = grid.length;
  for (let i = 0; i < m; i++) {
    const col = [];
    const n = grid[i].length;
    for (let j = 0; j < n; j++) {
      if (m === n) {
        console.log(`m===n ${grid[j][i]}`);
        const num = grid[j][i];
        const numLength = String(num).split("").length;
        col.push(numLength);
      } else {
        console.log(`m!=n ${grid[i][j]}`);
        const num = grid[i][j];
        const numLength = String(num).split("").length;
        width.push(numLength);
      }
    }
    if (m === n) {
      width.push(Math.max(...col));
    }
  }
  if (m != grid[0].length) {
    return [Math.max(...width)];
  } else {
    return width;
  }
};

// Problem link: https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/
