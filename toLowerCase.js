var toLowerCase = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      s = s.replace(s[i], s[i].toLowerCase());
    }
  }
  return s;
};

// Problem link: https://leetcode.com/problems/to-lower-case/description/
