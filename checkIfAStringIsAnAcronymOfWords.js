var isAcronym = function (words, s) {
  const chArr = words.map((word) => word[0]);
  return chArr.join("") === s;
};

// Problem link: https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/description/
