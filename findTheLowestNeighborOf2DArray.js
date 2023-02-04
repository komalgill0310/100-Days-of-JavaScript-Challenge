// Understanding:
//   - 2D array is given
//   - x and y co-ordinate is given, meaning index of the number from the array is given.

// Return:
// - the number which is lowest around the number at the given co-ordinate.
// - if the surrounding number is not lowest, then return the number at the indexes which are given in the problem.

// Note:
// 1. Check all the surrounding of the number at the given indexes meaning up, down, left, right, and diagonally as well.

// Question: How to check if the number is the neighbor of the given nnumber.
// 1. the difference between the index of the loop and the given x and y is only one.
// (x===i && +(y-j) === 1) || (y===j && +(x-i) === 1) || (+(x-i) === 1 && +(y-j) === 1)

// Breakdown:
// 1. Find out the the number from the array at the given index(x and y).
// 2. Store that number in a variable
// 3. Use for loop to loop through the given array
// 4. use nested loop to loop through the sub array.
// 5. use if condition to find out if the number is the neighbor of the number which we stored in a variable at Step1
// 6. if it is ->
// 7. do the comparison and check if the neighbor number < the stored number
//  8. if it is lowest, then the stored number will be the neighbor number

// NOTE: UNARY OPERATOR does not change the sign of a number and if it is already a number, then UNARY has no effect on the number.
// => Example: x = 0, i = 1
//    +(x-i) === 1 -> +(0-1) === 1 -> +(-1) === 1 -> -1 ===1 --> this will evaluates to false
// And they only convert the operand to a number, if it's not a number already. It does not change the negative number to positive number.
//  who does then: Math.abs(operand or expression)

function lowestElement(arr, x, y) {
  let lowestNum = arr[x][y];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (
        (x === i && Math.abs(y - j) === 1) ||
        (y === j && Math.abs(x - i) === 1) ||
        (Math.abs(x - i) === 1 && Math.abs(y - j) === 1)
      ) {
        if (arr[i][j] < lowestNum) {
          lowestNum = arr[i][j];
        }
      }
    }
  }
  return lowestNum;
}

// Problem link: https://edabit.com/challenge/pgqyeEyTtzJL9L8Nq
