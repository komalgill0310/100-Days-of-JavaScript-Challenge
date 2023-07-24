var canBeEqual = function (target, arr) {
  return target.every((num) => {
    if (arr.includes(num)) {
      arr.splice(arr.indexOf(num), 1);
      return true;
    }
    return false;
  });
};
// Problem link: https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/description/
