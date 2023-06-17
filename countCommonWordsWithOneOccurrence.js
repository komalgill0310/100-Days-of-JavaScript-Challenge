var countWords = function (words1, words2) {
  const uniqueWords1 = words1.filter(
    (word) => words1.indexOf(word) === words1.lastIndexOf(word)
  );
  const uniqueWords2 = words2.filter(
    (word) => words2.indexOf(word) === words2.lastIndexOf(word)
  );
  return uniqueWords1.filter((word) => uniqueWords2.includes(word)).length;
};

// Problem link: https://leetcode.com/problems/count-common-words-with-one-occurrence/description/
