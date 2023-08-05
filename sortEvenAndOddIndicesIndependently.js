var sortEvenOdd = function (nums) {
  nums.sort((a, b, i) => {
    if (i % 2 === 0) {
      return a[i] - b[i + 2];
    } else {
      return b[i] - a[i + 2];
    }
  });
  console.log("nums: ", nums);
};

// YET TO SOLVE => WRONG THINKING

// Problem link: https://leetcode.com/problems/sort-even-and-odd-indices-independently/
