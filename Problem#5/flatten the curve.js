// Given an array of Integers, replace every number with the mean of all numbers.

// Notes:
// Round averages to 1 decimal point.
// Return an empty array if given an empty array

//Examples:
// flattenCurve([1, 2, 3, 4, 5]) ➞ [3, 3, 3, 3, 3]
// flattenCurve([4]) ➞ [4]
// flattenCurve([]) ➞ []

function flattenCurve(arr) {
  let mean = arr.length ? arr.reduce((a, c) => a + c) / arr.length : arr;
  if (Array.isArray(mean)) return [];
  else {
    mean = Number.isInteger(mean) ? mean : +mean.toFixed(1);
    arr.fill(mean, 0);
    return arr;
  }
}

//Time to Solve: 26Min
