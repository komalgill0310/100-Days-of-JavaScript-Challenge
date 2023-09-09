var findColumnWidth = function (grid) {
  const rowLength = grid.length;
  const colLength = grid[0].length;
  const width = [];
  for (let col = 0; col < colLength; col++) {
    const eachColumn = [];
    for (let row = 0; row < rowLength; row++) {
      const numLength = String(grid[row][col]).split("").length;
      eachColumn.push(numLength);
    }
    width.push(Math.max(...eachColumn));
  }
  return width;
};

// Problem link: https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/
