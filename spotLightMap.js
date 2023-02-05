// END GOAL: DISPLAY ALL OF THE NEIGHBOR OF THE CORRESPONDING ELEMENTS

// loop through the parent array => length of 3
// const lengthOfChildArr = arr[i]
// let sum = 0
// let x, y;
// let num;
// BELOW LOOP WILL HOLD THE ELEMENT UNTIL WE HAVE FOUND ITS NEIGHBORS
// for(let i=0; i<arr[i].length; i--){
// y = 0
// x = i
//  num = arr[x][y]
// call a findNeighbor(num, i, j)
//
// }

// function findNeighbor(num, x, y)
// run a for loop again for for the parent and its child
// each time make a comparison if the elements are the neighbor of the current value of the num.
// HOW TO CODE:
// for(let i=0; i< grid.length; i++){
//     for(let j=0; j<grid[i].length; j++){
//  if((x === i && Math.abs(y-j) === 1) || (y === j && Math.abs(x-i) === 1) || (Math.abs(x-i) === 1 && Math.abs(y-j) === 1)){
// num = num + grid[i][j]
// }
// }
// console.log("spotLight Sum: ", num)
// }

function spotlightMap(grid) {
  const spotLightArr = Array(grid.length);
  for (let i = 0; i < spotLightArr.length; i++) {
    spotLightArr[i] = Array(grid[i].length).fill(0);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let num = grid[i][j];
      spotLightArr[i][j] = findNeighbor(grid, num, i, j);
    }
  }
  return spotLightArr;
}

function findNeighbor(grid, num, x, y) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (
        (x === i && Math.abs(y - j) === 1) ||
        (y === j && Math.abs(x - i) === 1) ||
        (Math.abs(x - i) === 1 && Math.abs(y - j) === 1)
      ) {
        num = num + grid[i][j];
      }
    }
  }
  return num;
}

// Problem link: https://edabit.com/challenge/ZkGDweXrsSaCfXGzq
