var replaceElements = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const maxNum = Math.max(...arr.slice(i + 1));
    arr.splice(i, 1, maxNum);
  }
  arr.splice(-1, 1, -1); //replace last element with -1
  return arr;
};

// Problem link: https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
