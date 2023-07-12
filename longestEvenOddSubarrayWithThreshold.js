var longestAlternatingSubarray = function (nums, threshold) {
  let maxSubArrLength = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && nums[i] <= threshold) {
      let subArr = [nums[i]];
      let j = i + 1;
      while (j < nums.length && subArr.length <= threshold) {
        if (nums[j] % 2 !== nums[j - 1] % 2 && nums[j] <= threshold) {
          subArr.push(nums[j]);
          j++;
        } else {
          break;
        }
      }
      maxSubArrLength = Math.max(maxSubArrLength, subArr.length);
    }
  }
  return maxSubArrLength;
};

// Problem link: https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/
