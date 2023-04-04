// Input:
// 1. an array of integers of length n is given

// Output:
// 1. return an array where each value of the returned array is givenArray[givenArray[i]]

// Breakdown:
// 1. Use map method to loop over the given array
// 2. for each element of the array, givenArray[givenArray[i]]
// 3. return the output from map method.

var buildArray = function (nums) {
  return nums.map((num, i) => nums[num]);
};

// Problem link: https://leetcode.com/problems/build-array-from-permutation/
