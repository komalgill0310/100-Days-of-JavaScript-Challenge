var findMatrix = function (nums) {
  if (nums.length === [...new Set(nums)].length) return [nums];
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    const row = [];
    for (let j = 0; j < nums.length; j++) {
      if (!row.includes(nums[j])) {
        row.push(nums[j]);
        nums.splice(j, 1);
        j--;
      }
    }
    arr.push(row);
    i--;
  }
  return arr;
};

// Problem link: https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/
