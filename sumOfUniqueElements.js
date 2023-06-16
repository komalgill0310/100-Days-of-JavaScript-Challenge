var sumOfUnique = function (nums) {
  const uniqueNums = [...new Set(nums)];
  if (uniqueNums.length === nums.length)
    return nums.reduce((total, curr) => total + curr, 0);
  const uniqueFilteredNums = nums.filter(
    (num) => nums.indexOf(num) === nums.lastIndexOf(num)
  );
  return uniqueFilteredNums.length
    ? uniqueFilteredNums.reduce((total, curr) => total + curr, 0)
    : 0;
};

// Problem link: https://leetcode.com/problems/sum-of-unique-elements/description/
