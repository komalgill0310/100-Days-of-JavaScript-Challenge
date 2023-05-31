// Breakdown:
var mergeAlternately = function (word1, word2) {
  let mergedStr = "";
  let remainingWord = "";
  word1 = word1.split("");
  word2 = word2.split("");
  if (word1.length != word2.length) {
    if (word1.length > word2.length) {
      remainingWord = word1.splice(word2.length).join("");
    } else if (word2.length > word1.length) {
      remainingWord = word2.splice(word1.length).join("");
    }
  }
  for (let i = 0; i < word1.length; i++) {
    mergedStr += word1[i] + word2[i];
  }
  return mergedStr + remainingWord;
};

// Problem link: https://leetcode.com/problems/merge-strings-alternately/
