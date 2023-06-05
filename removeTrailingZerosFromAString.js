var removeTrailingZeros = function (num) {
  const numArr = num.split("");
  for (let i = numArr.length - 1; i >= 0; i--) {
    if (numArr[i] != "0") {
      num = num.slice(0, numArr.length);
      return num;
    }
    numArr.splice(i, 1);
  }
};
// Problem link: https://leetcode.com/problems/remove-trailing-zeros-from-a-string/
