// FEW TEST CASES ARE FAILING

var distinctAverages = function (nums) {
  let avg = [];
  while (nums.length > 0) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    const maxIndex = nums.indexOf(max);
    const minIndex = nums.indexOf(min);
    nums.splice(maxIndex, 1);
    nums.splice(minIndex, 1);
    avg.push((max + min) / 2);
  }
  avg = avg.filter((num) => num != 0);
  console.log(avg);
  return [...new Set(avg)].length;
};

// Problem link: https://leetcode.com/problems/number-of-distinct-averages/
