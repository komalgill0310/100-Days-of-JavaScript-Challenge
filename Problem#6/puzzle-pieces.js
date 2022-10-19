// Given two array, add the first element of the first array with first element of the second array and so on.

// Return true: if all the addition element are same otherwise false
// Return false: if the length of both arrays do not match

// Example: puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]) ➞ true
// 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// Both arrays sum to [5, 5, 5, 5]

function puzzlePieces(a1, a2) {
  if (a1.length != a2.length) return false;
  else {
    const sumArr = a1.map((num, index) => num + a2[index]);
    return sumArr.slice(1).every((value, index) => value === sumArr[index]);
  }
}

//Time to Solve: 28Min
