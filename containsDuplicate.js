// High Level Overview:
// 1. use map to find the duplicate numbers, and return their indices
// 2. Store the first and last index of duplicates
// 3. Subtract the (last index - first index) <= k

// Steps:
// 1. Create an object called lastIndex
// 2. Loop through an array using for loop
// 3. store current num in an array at index i in a variable called num
// 4. check if the num is a key in lastIndex object and if it is then check if i - lastIndex[num] <=k
// ===> return true
// 5. lastIndex[num] = i
// 6. return false

var containsNearbyDuplicate = function (nums, k) {
  const lastIndex = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (lastIndex.hasOwnProperty(num) && i - lastIndex[num] <= k) {
      return true;
    }
    lastIndex[num] = i;
  }
  return false;
};

// Problem link: https://leetcode.com/problems/contains-duplicate-ii/
