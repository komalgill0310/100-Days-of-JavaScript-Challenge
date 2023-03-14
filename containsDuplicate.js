// High Level Overview:
// 1. use map to find the duplicate numbers, and return their indices
// 2. Store the first and last index of duplicates
// 3. Subtract the (last index - first index) <= k

// Steps:
// 1. use Set on the given array to exclude duplicates
// 2. use map on the unique values arrays, and check if the index are not equal, then return [nums.indexOf(num), nums.lastIndexOf(num)]
// 3. use filter with map to exclude undefined values
// 4. Use every method on the duplicateIndices and perform subtract operation on each sub array and check if the result is <= k

var containsNearbyDuplicate = function (nums, k) {
  const uniqueNums = [...new Set(nums)];
  console.log(uniqueNums);
  const duplicateIndices = uniqueNums
    .map((num) => {
      if (nums.indexOf(num) != nums.lastIndexOf(num)) {
        return [nums.indexOf(num), nums.lastIndexOf(num)];
      }
    })
    .filter((value) => value != undefined);
  console.log("duplicateIndices: ", duplicateIndices);
  return duplicateIndices.every(
    (indicesArr) => Math.abs(indicesArr[0] - indicesArr[1]) <= k
  );
};

// Problem link: https://leetcode.com/problems/contains-duplicate-ii/

// YET TO SOLVE
