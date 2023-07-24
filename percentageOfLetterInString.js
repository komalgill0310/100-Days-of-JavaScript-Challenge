var percentageLetter = function (s, letter) {
  return Math.floor(
    (Array.from(s).filter((ch) => ch === letter).length / s.length) * 100
  );
};

// Problem link: https://leetcode.com/problems/percentage-of-letter-in-string/description/
