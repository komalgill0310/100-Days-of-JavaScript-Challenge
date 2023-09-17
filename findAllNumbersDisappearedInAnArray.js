var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  const range = [];
  let startNum = 1;
  while (n > 0) {
    range.push(startNum);
    startNum++;
    n--;
  }
  const missingNumArr = range.filter((num) => !nums.includes(num));
  return missingNumArr;
};

// Problem link: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
