// Calculate Digit Sum of a String

var digitSum = function (s, k) {
  while (s.length > k) {
    const pairs = [];
    for (let i = 0; i < s.length; i += k) {
      if (s.length < k) {
        pairs.push(s.slice(i));
      } else {
        pairs.push(s.slice(i, k + i));
      }
    }
    const digitSumArr = pairs.map((pair) =>
      pair.split("").reduce((total, strNum) => total + Number(strNum), 0)
    );
    s = digitSumArr.join("");
  }
  return s;
};

// Problem link: https://leetcode.com/problems/calculate-digit-sum-of-a-string/description/
