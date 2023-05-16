// Breakdown:
// 1. Create a variable called sumOfMaxNumOfDeletedEle = 0
// 2. Create another variable called maxNumArr = []
// 3. while(grid.every(childGrid => childGrid.length != 0))
// ==> 1. Run a for loop over the grid
// ====> Parameters: i = 0; i < grid.length; i++
// =========> 1. let maxNum = Math.max(...grid[i])
// =========> 2. maxNumArr.push(maxNum)
// =========> 2. const maxNumIndex = grid[i].indexOf(maxNum)
// =========> 3. grid[i].splice(maxNumIndex, 1)
// ==> 2. sumOfMaxNumOfDeletedEle += Math.max(...maxNumArr)
// ==> 3. maxNumArr = []
// 4. return sumOfMaxNumOfDeletedEle

var deleteGreatestValue = function (grid) {
  let sumOfMaxNumOfDeletedEle = 0;
  let maxNumArr = [];
  while (grid.every((childGrid) => childGrid.length != 0)) {
    for (let i = 0; i < grid.length; i++) {
      let maxNum = Math.max(...grid[i]);
      maxNumArr.push(maxNum);
      const maxNumIndex = grid[i].indexOf(maxNum);
      grid[i].splice(maxNumIndex, 1);
    }
    sumOfMaxNumOfDeletedEle += Math.max(...maxNumArr);
    maxNumArr = [];
  }
  return sumOfMaxNumOfDeletedEle;
};

// Problem link: https://leetcode.com/problems/delete-greatest-value-in-each-row/
