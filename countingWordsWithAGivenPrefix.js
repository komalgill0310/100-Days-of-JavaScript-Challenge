var prefixCount = function (words, pref) {
  const prefLength = pref.length;
  return words.reduce(
    (matchCount, word) =>
      matchCount + (word.slice(0, prefLength) === pref ? 1 : 0),
    0
  );
};

// Problem link: https://leetcode.com/problems/counting-words-with-a-given-prefix/
