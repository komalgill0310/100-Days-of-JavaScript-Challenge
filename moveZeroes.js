var moveZeroes = function (nums) {
  const zeroesArr = nums.filter((num) => num === 0);
  if (zeroesArr.length === nums.length) return;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i--;
    }
  }
  nums.push(...zeroesArr);
};

// BETTER APPROACH: Using two pointer

var moveZeroes = function (nums) {
  let nonZeroIndex = 0;

  // MOVE ALL NON ZERO ELEMENTS AT THE BEGINNING OF AN ARRAY
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  //  REPLACE REMAINING ELEMENTS WITH ZEROES
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};

// Problem link: https://leetcode.com/problems/move-zeroes/description/
