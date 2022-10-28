function countIdentical(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 1) {
      count++;
    } else {
      const checkIdenticalItem =
        arr[i].slice(1).every((item) => arr[i][0] === item) && count++;
    }
  }
  return count;
}

//Create a function that takes in a two-dimensional array and returns the number of sub-arrays with only identical elements.

//Notes:
//Single-element arrays count as (trivially) having identical elements.

//e.g.:
//countIdentical([
//   [33, 33],
//   [5],
//   ["a", "a"],
//   [2, 2, 2],
//   [1, 2, 2],
//   [3, 1]
// ]) ➞ 4
