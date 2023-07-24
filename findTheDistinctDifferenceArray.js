var distinctDifferenceArray = function (nums) {
  const diffArr = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    let prefix = [...new Set(nums.slice(0, i + 1))].length;
    let suffix = [...new Set(nums.slice(i + 1, nums.length))].length;
    diffArr[i] = prefix - suffix;
  }
  return diffArr;
};

// Problem link: https://leetcode.com/problems/find-the-distinct-difference-array/
