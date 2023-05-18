// Breakdown:
// 1. Use for loop to over the given array
// ====> Parameters: i = 0; i < arr.length; i++
// =========> 1. Use nested for loop to loop over the same array
// =============> Parameters: j = 0; j < arr.length; j++
// =============> 1. Check if i===j then continue
// =============> 2. Check if arr[i] === 2*arr[j] return true
// 2. return false

var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[i] === 2 * arr[j]) return true;
    }
  }
  return false;
};

// Problem link: https://leetcode.com/problems/check-if-n-and-its-double-exist/
