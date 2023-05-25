// Breakdown:
// 1. Create an empty array called chunksArr
// 2. use for loop to loop over the given arr
// ======> Parameters: i = 0 ; i < arr.length ; i += size
// ===========> 1. chunkArr.push(arr.slice(i, size+i))
// 3. return chunkArr

var chunk = function (arr, size) {
  const chunksArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunksArr.push(arr.slice(i, size + i));
  }
  return chunksArr;
};

// Problem link: https://leetcode.com/problems/chunk-array/?utm_campaign=PostD21&utm_medium=Post&utm_source=Post&gio_link_id=YoXvrdGR
