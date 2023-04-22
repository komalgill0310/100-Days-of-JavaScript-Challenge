// Breakdown:
// 1. Create an empty Array called "shuffledStringArr" whose length is equal to the length of the indices Array
// 2. loop through an array called indices
// 3. replace shuffledStringArr[indices[i]] = s[i]
// 4. return shuffledStringArr.join("")

var restoreString = function (s, indices) {
  let shuffledStringArr = Array(indices.length).fill(0);
  for (let i = 0; i < indices.length; i++) {
    shuffledStringArr[indices[i]] = s[i];
  }
  return shuffledStringArr.join("");
};

// Problem link: https://leetcode.com/problems/shuffle-string/
