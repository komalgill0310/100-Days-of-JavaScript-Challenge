var frequencySort = function (nums) {
  // TOTAL OF EACH VALUE'S OCCURENCE IN NUMS ARRAY
  const freq = {};
  for (let i = 0; i < nums.length; i++) {
    if (Object.hasOwn(freq, nums[i])) {
      freq[nums[i]] += 1;
    } else {
      freq[nums[i]] = 1;
    }
  }

  // GET KEY VALUE PAIRS
  const arr = [];
  for (const [key, value] of Object.entries(freq)) {
    arr.push([key, value]);
  }

  // SORT THE ARRAY
  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    }
    return a[1] - b[1];
  });

  // PUSH THE VALUES IN AN ARRAY UNTIL THE FREQUENCY IS 0
  const sortedArr = [];
  for (let [value, frequency] of arr) {
    while (frequency > 0) {
      sortedArr.push(+value);
      frequency--;
    }
  }
  return sortedArr;
};

// Problem link: https://leetcode.com/problems/sort-array-by-increasing-frequency/
