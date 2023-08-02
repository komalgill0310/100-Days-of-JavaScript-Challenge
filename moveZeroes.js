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

// Problem link: https://leetcode.com/problems/move-zeroes/description/
