// Breakdown:
// 1. split the given string in order to convert it into an array, and store it into a variable called strArr
// 2. Use slice to extract the output
// ==> 1. start index: 0
// ==> 2. end index: k
// 3. return the extracted output by converting array to string using join method

var truncateSentence = function (s, k) {
  const strArr = s.split(" ");
  return strArr.slice(0, k).join(" ");
};

// Problem link: https://leetcode.com/problems/truncate-sentence/
