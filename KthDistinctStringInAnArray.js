var kthDistinct = function (arr, k) {
  const distinctArr = arr.filter(
    (str) => arr.indexOf(str) === arr.lastIndexOf(str)
  );
  return distinctArr.length >= k ? distinctArr[k - 1] : "";
};

// Problem link: https://leetcode.com/problems/kth-distinct-string-in-an-array/description/
