var findMaxConsecutiveOnes = function (nums) {
  let maxOnes = 0;
  for (let i = 0; i < nums.length; i++) {
    let j = 0;
    if (nums[i] === 1) {
      j = i;
      while (nums[j] === 1) {
        j++;
      }
      if (i != j) {
        let oldIndex = i;
        i = j;
        j = j - oldIndex;
      }
      if (maxOnes < j) maxOnes = j;
    }
  }
  return maxOnes;
};

// Problem link: https://leetcode.com/problems/max-consecutive-ones/description/
