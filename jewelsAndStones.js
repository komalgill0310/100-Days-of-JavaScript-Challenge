// Breakdown:
// 1. Create a variable called numOfStonesWhichJewels = 0
// 2. Use for loop to loop over the jewels
// ===> 1. check for each stone in stones is present in the jewels
// ===========> 1. numOfStonesWhichJewels++
// 4. Return numOfStonesWhichAreJewels

var numJewelsInStones = function (jewels, stones) {
  let numOfStonesWhichAreJewels = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) numOfStonesWhichAreJewels++;
  }
  return numOfStonesWhichAreJewels;
};

// Problem link: https://leetcode.com/problems/jewels-and-stones/
