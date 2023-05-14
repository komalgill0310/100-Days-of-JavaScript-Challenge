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
    if (key != String(freq[key])) {
      delete freq[key];
    }
  }
  return Object.keys(freq).length ? Math.max(...Object.values(freq)) : -1;
};

// SOME TEST CASES ARE FAILING

// Problem link: https://leetcode.com/problems/find-lucky-integer-in-an-array/
