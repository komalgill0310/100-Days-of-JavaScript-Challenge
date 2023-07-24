var applyOperations = function (nums) {
  const zeroesArr = [];
  // APPLY OPERATION TO THE GIVEN ARRAY
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0 && nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
      nums.splice(i + 1, 1); //REMOVE num[i] from arr, which was converted to zero during operation
      zeroesArr.push(0); //PUSH zero in to an an array after deleting from nums array
    }
    // IF THERE IS ZERO IN THE ARRAY WITHOUT PERFORMING AN OPERATION
    if (nums[i] === 0) {
      nums.splice(i, 1);
      zeroesArr.push(0);
      i--;
    }
  }
  nums.push(...zeroesArr);
  return nums;
};
// Problem link: https://leetcode.com/problems/apply-operations-to-an-array/
