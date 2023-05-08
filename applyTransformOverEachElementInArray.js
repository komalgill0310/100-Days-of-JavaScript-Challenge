// Breakdown:
// 1. Create an array of length equals to given arr.length and fill the newly created array with 0, store the new array in a variable called "returnedArray"
// 2. Use a for loop to loop over the given array.
// ====> 1. Parameters: i = 0; i < arr.length; i++
// ========> 1. returnedArray[i] = fn(arr[i], i)
// 3. return returnedArray

var map = function (arr, fn) {
  const returnedArray = Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    returnedArray[i] = fn(arr[i], i);
  }
  return returnedArray;
};

// Problem link: https://leetcode.com/problems/apply-transform-over-each-element-in-array/?utm_campaign=PostD4&utm_medium=Post&utm_source=Post&gio_link_id=noqbNOv9
