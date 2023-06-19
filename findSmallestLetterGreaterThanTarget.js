var nextGreatestLetter = function (letters, target) {
  const targetCharCode = target.charCodeAt(0);
  for (let ch of letters) {
    if (ch.charCodeAt(0) > targetCharCode) {
      return ch;
    }
  }
  return letters[0];
};

// Problem link: https://leetcode.com/problems/find-smallest-letter-greater-than-target/
