// Breakdown:
// 1. Create a variable called numOfAirthmeticTriplets and initialize it to 0
// 2. use a for loop to loop over the nums array from index 0
// ==> 1. use another for loop to loop over the nums array from index 1
// ====> 1. Use another for loop to loop over the nums array from index 2
// ========> 1. if nums[k] - nums[j] === diff && nums[j] - nums[i] === diff
// ===============> numOfAirthmeticTriplets++
// 3. return numOfAirthmeticTriplets

var arithmeticTriplets = function (nums, diff) {
  let numOfAirthmeticTriplets = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[k] - nums[j] === diff && nums[j] - nums[i] === diff) {
          numOfAirthmeticTriplets++;
        }
      }
    }
  }
  return numOfAirthmeticTriplets;
};

// Problem link: https://leetcode.com/problems/number-of-arithmetic-triplets/
