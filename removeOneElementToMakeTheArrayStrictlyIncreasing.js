var canBeIncreasing = function (nums) {
  if (nums.slice(1).every((num, i) => nums[i] === num)) {
    nums.splice(0, 1);
    return nums.length === 1 ? true : false;
  }
  let duplicateArr = [...new Set(nums)];
  for (let i = 0; i < duplicateArr.length; i++) {
    duplicateArr.splice(i, 1);
    const duplicateSplice = [...duplicateArr];
    const sortedDuplicateArr = [
      ...new Set(duplicateSplice.sort((a, b) => a - b)),
    ];
    if (sortedDuplicateArr.every((num, i) => num === duplicateArr[i])) {
      return true;
    } else {
      duplicateArr = [...nums];
      console.log("else: ", duplicateArr);
    }
  }
  return false;
};

// SOME TEST CASES ARE FAILING

// Problem link: https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/
