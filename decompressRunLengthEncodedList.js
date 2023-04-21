// Breakdown:
// 1. Create an empty array called decompressedList
// 2. Use for loop to over the given array
// ===> Parameters for For loop: i = 0; i < nums.length; i = i + 2
// ======> 1. create a variable called freq and store the value of nums[i]
// ======> 2. create a variable called val and store the value of nums[i+1]
// ======> 3. Create an array of length "freq" and fill the array with "val", then concatenate with decompressedList, and also store the updated array in decompressedList
// 3. return decompressedList

var decompressRLElist = function (nums) {
  let decompressedList = [];
  for (let i = 0; i < nums.length; i = i + 2) {
    const [freq, val] = [nums[i], nums[i + 1]];
    decompressedList = [...decompressedList, ...Array(freq).fill(val)];
  }
  return decompressedList;
};

// Problem link: https://leetcode.com/problems/decompress-run-length-encoded-list/
