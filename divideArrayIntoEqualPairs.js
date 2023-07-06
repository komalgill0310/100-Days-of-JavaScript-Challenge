var divideArray = function (nums) {
  const freq = {};
  for (let i = 0; i < nums.length; i++) {
    if (Object.hasOwn(freq, nums[i])) {
      freq[nums[i]] += 1;
    } else {
      freq[nums[i]] = 1;
    }
  }

  return Object.values(freq).every((value) => value % 2 === 0);
};

// Problem link: https://leetcode.com/problems/divide-array-into-equal-pairs/
