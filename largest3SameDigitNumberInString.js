var largestGoodInteger = function (num) {
  const consecutiveNumArr = [
    "000",
    "111",
    "222",
    "333",
    "444",
    "555",
    "666",
    "777",
    "888",
    "999",
  ];
  const subStr = [];
  for (let i = 0; i < num.length - 2; i++) {
    const strNum = num.slice(i, i + 3);
    if (consecutiveNumArr.includes(strNum)) {
      subStr.push(strNum);
    }
  }
  console.log(subStr);
  if (subStr.length > 1) {
    const maxStrNum = Math.max(...subStr);
    console.log(maxStrNum);
    return maxStrNum === 0 ? "000" : String(maxStrNum);
  }
  return subStr.length ? subStr[0] : "";
};

// Problem link: https://leetcode.com/problems/largest-3-same-digit-number-in-string/
