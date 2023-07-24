var repeatedNTimes = function (nums) {
  const n = nums.length / 2;
  const freq = {};
  for (let i = 0; i < 2 * n; i++) {
    const num = nums[i];
    if (Object.hasOwn(freq, num)) {
      freq[num] += 1;
    } else {
      freq[num] = 1;
    }
  }
  for (const [key, value] of Object.entries(freq)) {
    value === n && key;
  }
};

// Problem link: https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
