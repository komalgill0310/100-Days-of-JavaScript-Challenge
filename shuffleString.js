// Breakdown:
// 1. Create an empty string variable called "shuffledString"
// 2. loop through an array called indices
// 3. get character from the given string at the index of the value of the arr and add that character to the shuffledString
// 4. return shuffledString

var restoreString = function (s, indices) {
  let shuffledString = "";
  for (let i = 0; i < indices.length; i++) {
    console.log(indices[i]);
    shuffledString += s[indices[i]];
  }
  return shuffledString;
};

// Problem link: https://leetcode.com/problems/shuffle-string/
