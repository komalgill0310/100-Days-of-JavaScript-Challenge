var countPrefixes = function (words, s) {
  let totalPrefix = 0;
  for (let i = 0; i < words.length; i++) {
    if (s.startsWith(words[i])) {
      totalPrefix++;
    }
  }
  return totalPrefix;
};

// Problem link: https://leetcode.com/problems/count-prefixes-of-a-given-string/
