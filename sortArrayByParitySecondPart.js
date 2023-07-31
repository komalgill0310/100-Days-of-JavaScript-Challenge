var sortArrayByParityII = function (nums) {
  const even = nums.filter((num) => num % 2 === 0).sort((a, b) => a - b);
  const odd = nums.filter((num) => num % 2 != 0).sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    if (i === 0) {
      nums[i] = even[i];
      nums[i + 1] = odd[i];
    } else {
      nums[i] = even[i / 2];
      nums[i + 1] = odd[i / 2];
    }
  }
  return nums;
};

// Problem link: https://leetcode.com/problems/sort-array-by-parity-ii/description/
