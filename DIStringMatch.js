var diStringMatch = function (s) {
  let n = s.length;
  const range = [];
  while (n >= 0) {
    range.push(n);
    n--;
  }
  const permArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "I") {
      permArr.push(...range.slice(-1));
      range.splice(-1, 1);
    } else {
      permArr.push(range[0]);
      range.splice(0, 1);
    }
  }
  permArr.push(...range);
  return permArr;
};

// Problem link: https://leetcode.com/problems/di-string-match/description/
