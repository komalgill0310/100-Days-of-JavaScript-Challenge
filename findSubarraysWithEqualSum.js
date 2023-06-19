var findSubarrays = function (nums) {
  const subArrOfNums = [];
  for (let i = 0; i < nums.length - 1; i += 2) {
    subArrOfNums.push(nums[i] + nums[i + 1], nums[i + 1] + nums[i + 2]);
  }
  const uniqueSubArrSums = [...new Set(subArrOfNums)];
  return uniqueSubArrSums.length != subArrOfNums.length ? true : false;
};

// Problem link: https://leetcode.com/problems/find-subarrays-with-equal-sum/
