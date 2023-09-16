var distinctAverages = function (nums) {
  let avg = [];
  while (nums.length > 0) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    nums.splice(nums.indexOf(max), 1);
    nums.splice(nums.indexOf(min), 1);
    avg.push((max + min) / 2);
  }
  return [...new Set(avg)].length;
};

// Problem link: https://leetcode.com/problems/number-of-distinct-averages/
