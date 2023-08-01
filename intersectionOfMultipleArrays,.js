var intersection = function (nums) {
  const sortedCommonEleArr = [];
  for (let i = 0; i < nums[0].length; i++) {
    const num = nums[0][i];
    if (nums.slice(1).every((numArr) => numArr.includes(num))) {
      sortedCommonEleArr.push(num);
    }
  }
  sortedCommonEleArr.sort((a, b) => a - b);
  return sortedCommonEleArr;
};

// Problem link: https://leetcode.com/problems/intersection-of-multiple-arrays/description/
