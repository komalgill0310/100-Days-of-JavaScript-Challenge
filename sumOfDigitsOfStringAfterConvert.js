var getLucky = function (s, k) {
  const charCodeForA = 97;
  let strNum = s
    .split("")
    .map((ch, i) => s.charCodeAt(i) - charCodeForA + 1)
    .join("");
  while (k != 0) {
    strNum = String(strNum)
      .split("")
      .reduce((total, curr) => total + Number(curr), 0);
    k--;
  }
  return strNum;
};

// Problem link: https://leetcode.com/problems/sum-of-digits-of-string-after-convert/description/
