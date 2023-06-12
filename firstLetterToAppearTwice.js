var repeatedCharacter = function (s) {
  const freq = {};
  for (let i = 0; i < s.length; i++) {
    if (Object.hasOwn(freq, s[i])) {
      freq[s[i]] += 1;
      if (freq[s[i]] === 2) {
        return s[i];
      }
    } else {
      freq[s[i]] = 1;
    }
  }
};

// Problem link: https://leetcode.com/problems/first-letter-to-appear-twice/description/
