var longestCommonPrefix = function (strs) {
  let commonPrefix = "";
  const firstStr = strs[0].split("");
  for (let i = 0; i < firstStr.length; i++) {
    if (!strs.slice(1).every((str) => str[i] === firstStr[i])) {
      return commonPrefix;
    } else {
      commonPrefix += firstStr[i];
    }
  }
  return commonPrefix;
};

// Problem link: https://leetcode.com/problems/longest-common-prefix/description/
