var detectCapitalUse = function (word) {
  return (
    word === word.toUpperCase() ||
    word === word.toLowerCase() ||
    word === word[0].toUpperCase() + word.slice(1).toLowerCase()
  );
};

// Problem link: https://leetcode.com/problems/detect-capital/
