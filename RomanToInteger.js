// Steps:
// 1. Create an object called romanIntergerObj, and store the romans as an object's key and store the corresponding value to the roman as a value to the object's key.
// 2. Split the given roman string into an array called splitRomanArr
// 3. Create a variable called integer and give it a value 0
// 4. Loop through the splitRomanArr and treat each array's value as an object key
// 5. Add each object's key value to an integer
// 6. Return integer

// SUBTRACTIVE PRINICIPLE RULE =>
// This rule applies only when certain pairs of numerals are used in combination, such as:
// 1. I placed before V or X (e.g. IV represents 4, IX represents 9)
// 2. X placed before L or C (e.g. XL represents 40, XC represents 90)
// 3. C placed before D or M (e.g. CD represents 400, CM represents 900)
// 4. In all other cases, the numerals are added together to represent the total value.

var romanToInt = function (s) {
  const romanIntergerObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const splitRomanArr = s.split("");
  let integer = 0;
  for (let i = 1; i <= splitRomanArr.length; i++) {
    const firstRomanValue = splitRomanArr[i - 1];
    const secondRomanValue = splitRomanArr[i];
    2;
    if (
      (firstRomanValue === "I" &&
        (secondRomanValue === "V" || secondRomanValue === "X")) ||
      (firstRomanValue === "X" &&
        (secondRomanValue === "L" || secondRomanValue === "C")) ||
      (firstRomanValue === "C" &&
        (secondRomanValue === "D" || secondRomanValue === "M"))
    ) {
      integer +=
        romanIntergerObj[secondRomanValue] - romanIntergerObj[firstRomanValue];
      i += 1;
    } else {
      integer += romanIntergerObj[firstRomanValue];
    }
  }
  return integer;
};

// UPDATE VERSION

var romanToInt = function (s) {
  const romanIntergerObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let integer = 0;
  for (let i = 0; i < s.length; i++) {
    const current = romanIntergerObj[s[i]];
    const next = romanIntergerObj[s[i + 1]];
    if (current && current < next) {
      integer += next - current;
      i++;
    } else {
      integer += current;
    }
  }
  return integer;
};

// Problem link: https://leetcode.com/problems/roman-to-integer/
