var sortByBits = function (arr) {
  let binaryArr = arr.map((num) => [
    num,
    num
      .toString(2)
      .split("")
      .filter((strDigit) => strDigit === "1").length,
  ]);
  binaryArr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  const sortedArr = binaryArr.map((subArr) => subArr[0]);
  return sortedArr;
};

// Problem link: https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/description/
