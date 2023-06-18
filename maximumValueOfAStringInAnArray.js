var maximumValue = function (strs) {
  const strsLength = strs.map((str) =>
    Number(str) || Number(str) === 0 ? Number(str) : str.length
  );
  return Math.max(...strsLength);
};

// Problem link: https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/description/
