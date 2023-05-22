// Breakdown:
// 1. Create a variable called countNumOfPairs = 0
// 2. Use for loop to loop over the given array.
// ==> Parameters: i = 0; i < nums.length; i++
// =======> 1. Use nested for loop to loop over the given array
// ================> Parameters: j = 0; j < nums.length; j++
// =======================> 1. Check if nums[i] === nums[j] && i*j = k
// ==============================> 1. countNumOfPairs++
// 3. return countNumOfPairs

var countPairs = function (nums, k) {
  let countNumOfPairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        countNumOfPairs++;
      }
    }
  }
  return countNumOfPairs;
};

// Problem link: https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/
