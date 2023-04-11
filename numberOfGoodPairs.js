// Breakdown:
// 1. Create a variable called countGoodPairs and inititalize it to 0
// 2. use for loop to loop through the given nums array
// 3. use nested for loop to loop through the given nums array but from index i+1
// 4. check if nums[i] === nums[j] and i < j
// 5. countGoodPairs++
// 6. return countGoodPairs

var numIdenticalPairs = function (nums) {
  let countGoodPairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && i < j) {
        countGoodPairs++;
      }
    }
  }
  return countGoodPairs;
};

// Problem link: https://leetcode.com/problems/number-of-good-pairs/
