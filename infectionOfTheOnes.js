// Input: a 2D array of zero and ones

// Output:
// 1. Replace zero of row and column with one where it has one.
// 2. Change the original Array

// Tool to change the original array: Splice method.

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
// ======> Parameters: i = rowIndexArr[i]; i < rowIndexArr.length; i++
// =======> 1.1 Use Nested for loop to loop through the given array in order to update the value of zero to one for the entire row.
// =========> Parameters: j = 0; j < arr[i].length; j++
// ===========> Update the value by using i and j for the array
// ==============> arr[i][j] = 1
// Console.log(arr)

// 2. Update Column:
// ===> 1. Use for loop to loop through the given array in order to update the arr with value of one
// =====> Parameters: i = 0; i < arr.length; i++
// =========> 1.1. use Use Nested for loop to loop through the given array in order to update the value of zero to one for the column.
// ============> Parameters: j = colIndexArr[i]; j < colIndexArr.length; j++
// Update the value by using i and j for the array
// ==================> arr[j][i] = 1
// console.log(arr)

function findIndexes() {
  const indexesOfOnesArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1) {
        indexesOfOnesArr.push([i, j]);
      }
    }
  }
  console.log(indexesOfOnesArr);
}

// Problem Link: https://edabit.com/challenge/wtPATmEY9xQCpzWNT

// YET TO FIGURE OUT
