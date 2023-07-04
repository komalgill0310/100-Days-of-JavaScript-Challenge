var sortArrayByParity = function (nums) {
  const evenArr = [];
  const oddArr = [];
  nums.filter((num) => (num % 2 ? oddArr.push(num) : evenArr.push(num)));
  evenArr.push(...oddArr);
  return evenArr;
};

// Problem link: https://leetcode.com/problems/sort-array-by-parity/
