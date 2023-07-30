var replaceDigits = function (s) {
  s = Array.from(s);
  const str = s.join("");
  for (let i = 1; i < s.length; i += 2) {
    const charCode = str.charCodeAt(i - 1);
    const value = Number(charCode + s[i]);
    console.log(typeof value);
    console.log(String.fromCodePoint(value), s[i]);
    s[i] = String.fromCodePoint(value);
  }
  console.log(s);
};

// Problem link: https://leetcode.com/problems/replace-all-digits-with-characters/
