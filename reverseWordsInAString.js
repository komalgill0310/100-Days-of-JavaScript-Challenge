var reverseWords = function (s) {
  return s
    .match(/\b[a-zA-Z]+\b/g)
    .reverse()
    .join(" ");
};

//Problem link:  https://leetcode.com/problems/reverse-words-in-a-string/
