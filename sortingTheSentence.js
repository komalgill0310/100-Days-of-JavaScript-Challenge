// Breakdown:
// 1. Create an empty called sentenceArr = []
// 2. split the given sentence and store the output in a variable called splitS
// 3. sort the splitS by their last ch in the word
// 4. loop through the sorted splitS
// 5. for word of the splitS = senteceArr[i]
// 6. join the sentenceArr and return the output

var sortSentence = function (s) {
  const sentenceArr = [];
  const splitS = s.split(" ");
  splitS.sort((a, b) => a.slice(-1) - b.slice(-1));
  for (let i = 0; i < splitS.length; i++) {
    sentenceArr[i] = splitS[i].slice(0, -1);
  }
  return sentenceArr.join(" ");
};

// Problem link: https://leetcode.com/problems/sorting-the-sentence/
