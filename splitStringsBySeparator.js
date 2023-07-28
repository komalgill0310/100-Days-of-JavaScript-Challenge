var splitWordsBySeparator = function (words, separator) {
  return words
    .flatMap((word) => word.split(separator))
    .filter((str) => str != "");
};

// Problem link:https://leetcode.com/problems/split-strings-by-separator/description/
