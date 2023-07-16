var minSubsequence = function (nums) {
  const subArr = [];
  let subArrSum = 0,
    numsSum = 0;
  while (subArrSum <= numsSum) {
    const maxNum = Math.max(...nums);
    subArr.push(maxNum);
    subArrSum = subArr.reduce((total, curr) => total + curr, 0);
    nums.splice(nums.indexOf(maxNum), 1);
    numsSum = nums.reduce((total, curr) => total + curr, 0);
  }
  return subArr;
};

// Problem link: https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/description/
