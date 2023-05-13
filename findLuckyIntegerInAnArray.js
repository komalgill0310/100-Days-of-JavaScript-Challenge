var findLucky = function (arr) {
  let freq = {};
  for (let value of arr) {
    if (freq.hasOwnProperty(value)) {
      freq[value]++;
    } else {
      freq[value] = 1;
    }
  }
  for (const key in freq) {
    if (Object.entries(freq).every(([key, value]) => key === String(value))) {
      return Math.max(...arr);
    } else if (key === String(freq[key])) {
      return freq[key];
    } else {
      return -1;
    }
  }
};

// SOME TEST CASES ARE FAILING

// Problem link: https://leetcode.com/problems/find-lucky-integer-in-an-array/
