// Breakdown:
// 1. Use map on the given array and store the output in a variable called sentencesLengthArr
// ====> 1. for each sentence in an array, use split to convert the sentence into an array of each word and then use length property to return teh length of the array
// 2. return maximum number from the sentencesLengthArr

var mostWordsFound = function (sentences) {
  const sentencesLengthArr = sentences.map(
    (sentence) => sentence.split(" ").length
  );
  return Math.max(...sentencesLengthArr);
};

// Problem link: https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
