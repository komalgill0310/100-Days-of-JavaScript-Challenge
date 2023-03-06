// High Level Overview:
// 1. Remove the space from the end of the string
// 2. Get the last word after the very last empty space till end

// Steps:
// 1. Use trimEnd to remove the space from the end of the string
// 2. Split the string from Step#1
// 3. get access to the last element of the array from Step#2 and return its length

var lengthOfLastWord = function (s) {
  const trimEndStr = s.trimEnd();
  const splitTrimStr = trimEndStr.split(" ");
  return splitTrimStr.slice(-1)[0].length;
};

// Problem link: https://leetcode.com/problems/length-of-last-word/
