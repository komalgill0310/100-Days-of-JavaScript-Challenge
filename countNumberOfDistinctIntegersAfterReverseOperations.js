var countDistinctIntegers = function (nums) {
  const reversedNums = [];
  nums.forEach((num) => {
    const reversed = Number(Array.from(String(num), Number).reverse().join(""));
    reversedNums.push(reversed);
  });
  nums.push(...reversedNums);
  return [...new Set(nums)].length;
};

// Problem link: https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/description/
