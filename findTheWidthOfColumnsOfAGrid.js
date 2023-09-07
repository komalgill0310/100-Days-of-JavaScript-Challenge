// Incorrect solution: Find out how to traverse from a column matrix if subArray's length != array's length

var findColumnWidth = function (grid) {
  const width = [];
  let i = 0;
  for (i = 0; i < grid[i].length; i++) {
    let col = [];
    let j = 0;
    while (j < grid.length) {
      const num = grid[j][i];
      const numLength = String(num).split("").length;
      col.push(numLength);
      console.log(`num: ${num} & numLength: ${numLength} & col: ${col}`);
      j++;
    }
    width.push(Math.max(...col));
  }
  console.log(width);
};

//     // const width = []
// for(let i = 0; i < grid.length; i++){
//     const col = []
//     for(let j = 0; j < grid.length; j++){
//         const num = grid[j][i]
//         const numLength = String(num).split("").length
//         col.push(numLength)
//         console.log(`num: ${num} & numLength: ${numLength} & col: ${col}`)
//     }
//     width.push(Math.max(...col))
// }
// console.log(width)

// Problem link: https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/
