var minDeletionSize = function (strs) {
  let deleteCol = 0;
  let k = strs[0].length;
  for (let i = 0; i < k; i++) {
    let str = "";
    if (k != 1) {
      for (let j = 0; j < strs.length; j++) {
        str += strs[j][i];
      }
      if (str !== Array.from(str).sort().join("")) {
        deleteCol++;
      }
    } else {
      if (strs.join("") != strs.sort().join("")) {
        deleteCol++;
      }
      break;
    }
  }
  return deleteCol;
};

// Problem link: https://leetcode.com/problems/delete-columns-to-make-sorted/description/
