var summaryRanges = function (nums) {
  const range = [];
  for (let i = 0; i < nums.length; i++) {
    const subRange = [];
    let j = i;
    while (nums[j + 1] - nums[j] === 1) {
      j++;
    }
    j > i
      ? subRange.push(`${nums[i]}->${nums[j]}`)
      : subRange.push(`${nums[i]}`);
    range.push(...subRange);
    i = j;
  }
  return range;
};

// Problem link: https://leetcode.com/problems/summary-ranges/description/
