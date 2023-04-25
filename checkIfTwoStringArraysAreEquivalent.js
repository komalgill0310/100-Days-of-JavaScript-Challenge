// Breakdown:
// 1. Convert word1 array into a string and store into a variable called "string1"
// 2. Convert word2 array into a string and store into a variable called "string2"
// 3. return string1 === string2 ? true : false

var arrayStringsAreEqual = function (word1, word2) {
  const string1 = word1.join("");
  const string2 = word2.join("");
  return string1 === string2;
};

// Problem link: https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
