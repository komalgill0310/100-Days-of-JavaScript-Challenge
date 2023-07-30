var replaceDigits = function (s) {
  s = Array.from(s);
  const str = s.join("");
  for (let i = 1; i < s.length; i += 2) {
    const charCode = str.charCodeAt(i - 1);
    const value = charCode + Number(s[i]);
    s[i] = String.fromCharCode(value);
  }
  return s.join("");
};

// Problem link: https://leetcode.com/problems/replace-all-digits-with-characters/
