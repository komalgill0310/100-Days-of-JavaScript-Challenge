// Input:
// 1. a variable called x is given whoes value is 0 initially
// 2. an array of operations is given where the operation could be:
// =====> --X, X--, X++, ++X

// Output:
// 1. Perform the operations given in an array on the X
// 2. return X

// Breakdown:
// 1. create a variable called x and set its value to 0
// 2. use for...of to loop through an operations array
// ===> 1. if value is either --X || X++
// ==========> x = x - 1
// ===> 2. if value is either ++X || X++
// ==========> x = x+1
// 3. return x

var finalValueAfterOperations = function (operations) {
  let x = 0;
  for (const operation of operations) {
    if (operation === "--X" || operation === "X--") {
      x--;
    }
    if (operation === "++X" || operation === "X++") {
      x++;
    }
  }
  return x;
};

// USING SWITCH

var finalValueAfterOperations = function (operations) {
  let x = 0;
  for (const operation of operations) {
    switch (operation) {
      case "--X":
      case "X--":
        x--;
        break;
      case "++X":
      case "X++":
        x++;
        break;
      default:
        // Handle invalid operation
        break;
    }
  }
  return x;
};

// Problem link: https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
