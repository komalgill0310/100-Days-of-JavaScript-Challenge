var sortEvenOdd = function (nums) {
  const evenArr = nums.filter((_, i) => i % 2 === 0).sort((a, b) => a - b);
  const oddArr = nums.filter((_, i) => i % 2 != 0).sort((a, b) => b - a);
  let evenIndex = 0,
    oddIndex = 0;
  nums.forEach(
    (_, i) =>
      (nums[i] = i % 2 === 0 ? evenArr[evenIndex++] : oddArr[oddIndex++])
  );
  return nums;
};

// Problem link: https://leetcode.com/problems/sort-even-and-odd-indices-independently/
