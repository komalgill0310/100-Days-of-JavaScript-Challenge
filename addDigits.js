var addDigits = function (num) {
  let strNum = String(num);
  while (strNum.length != 1) {
    strNum = strNum
      .split("")
      .reduce((total, num) => total + Number(num), 0)
      .toString();
  }
  return strNum;
};

// Problem link: https://leetcode.com/problems/add-digits/description/
