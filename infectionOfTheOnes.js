// Input: a 2D array of zero and ones

// Output:
// 1. Replace zero of row and column with one where it has one.
// 2. Change the original Array

// HIGH LEVEL OVERVIEW:
// 1. First find the indexes where the array contain one.
// 2. Run a loop to update the row and column of that index with one.

// BREAKDOWN:
// First part: Create a function called "findIndexes" in order to find the indexes where array has one.
// 1. Create an array called "rowIndexesArr" in order to store the row index
// 1. Create an array called "colIndexesArr" in order to store the column index
// 3. Run a for loop on the given array
// => Parameters: i = 0;  i < array.length; i++
// ===> 1. Run a nested loop for the sub array
// =====> Parameters: j = 0; j < array[i].length; j++
// ======> 1. Make an if condition to check the current element of the array === one
// =======> if it is, push the current index of row into array -> rownIndexesArr
// =======> push current index of col into an array -> colIndexesArr
// 3. Return an object with properties of rowIndexesArr and colIndexesArr
// ====> Use set on both arrays(in object properties) in order to remove the duplicates values.

// Second Part: Update the row and column at the given index in the indexesOfOnesArr
// ===> 1. Call a function findIndexes.rowIndexes in order to get access to the rowIndexArr
// ===> 2. Follow step#1 for the colIndexes

// 1. Update Row:
// ===> 1. Use for loop to loop through the rowIndexArr in order to get the rowIndex where array has one
// ======> Parameters: i = 0; i < rowIndexArr.length; i++
// ====> Get the value of the rowIndexArr at current Index using i and store it in a variable called "row"
// =======> 1.1 Use Nested for loop to loop through the given array in order to update the value of zero to one for the entire row.
// =========> Parameters: j = 0; j < arr[i].length; j++
// ===========> Update the value by using i and j for the array
// ==============> arr[row][j] = 1
// Console.log(arr)

// 2. Update Column:
// ===> 1. Use for loop to loop through the colIndexArr in order to update the all the columns of the array with value of one
// =====> Parameters: i = 0; i < colIndexArr.length; i++
// ===> Get the value of the colIndexArr at current Index using i and store it in a variable called "column"
// =========> 1.1. use Use Nested for loop to loop through the given array in order to update the value of zero to one for the column.
// ============> Parameters: j = 0; j < arr.length; j++
// Update the value by using i and j for the array
// ==================> arr[j][column] = 1
// console.log(arr)

// 3. Return the original arr

function onesInfection(arr) {
  const rowIndexArr = findIndexes(arr).rowIndexes;
  const colIndexArr = findIndexes(arr).colIndexes;
  //UPDATE ROWS
  for (let i = 0; i < rowIndexArr.length; i++) {
    let row = rowIndexArr[i];
    for (let j = 0; j < arr[i].length; j++) {
      arr[row][j] = 1;
    }
  }
  //UPDATE COLUMNS
  for (let i = 0; i < colIndexArr.length; i++) {
    let column = colIndexArr[i];
    for (let j = 0; j < arr.length; j++) {
      arr[j][column] = 1;
    }
  }
  return arr;
}

function findIndexes(arr) {
  const rowIndexes = [];
  const columnIndexes = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1) {
        rowIndexes.push(i);
        columnIndexes.push(j);
      }
    }
  }
  return {
    rowIndexes: [...new Set(rowIndexes)],
    colIndexes: [...new Set(columnIndexes)],
  };
}

// Problem Link: https://edabit.com/challenge/wtPATmEY9xQCpzWNT
