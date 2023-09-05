var sortColors = function (nums) {
  nums.sort((a, b) => a - b);
};

// Problem link: https://leetcode.com/problems/sort-colors/description/

//  without in built method

var sortColors = function (nums) {
  const deepCopyOfNums = [...nums];
  let j = 0;
  for (let i = 0; i < deepCopyOfNums.length; i++) {
    const min = Math.min(...deepCopyOfNums);
    const minIndex = deepCopyOfNums.indexOf(min);
    nums[j] = min;
    deepCopyOfNums.splice(minIndex, 1);
    i--, j++;
  }
};
