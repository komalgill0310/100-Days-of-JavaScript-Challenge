var maximumNumberOfStringPairs = function (words) {
  let totalNumOfPairs = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = i + 1; j < words.length; j++) {
      if (word === Array.from(words[j]).reverse()) {
        totalNumOfPairs++;
      }
    }
  }
  return totalNumOfPairs;
};

// Problem link: https://leetcode.com/problems/find-maximum-number-of-string-pairs/
