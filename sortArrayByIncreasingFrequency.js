var frequencySort = function (nums) {
  const freq = {};
  for (let i = 0; i < nums.length; i++) {
    if (Object.hasOwn(freq, nums[i])) {
      freq[nums[i]] += 1;
    } else {
      freq[nums[i]] = 1;
    }
  }

  // GET KEY VALUE PARIS
  const arr = [];
  for (const [key, value] of Object.entries(freq)) {
    arr.push([key, value]);
  }
  const sortedArr = arr.sort((a, b) => {
    if (a[1] === b[1]) {
      console.log("if: values are equal");
      return +b[0] - +a[0];
    } else {
      console.log("else: vlues are not equal", +b[0] - +a[0]);
      return +a[0] - +b[0];
    }
  });
  console.log(sortedArr);
};

// Problem link: https://leetcode.com/problems/sort-array-by-increasing-frequency/
