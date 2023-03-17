// Steps:
// 1. Create an object called romanIntergerObj, and store the romans as an object's key and store the corresponding value to the roman as a value to the object's key.
// 2. Split the given roman string into an array called splitRomanArr
// 3. Create a variable called integer and give it a value 0
// 4. Loop through the splitRomanArr and treat each array's value as an object key
// 5. Add each object's key value to an integer
// 6. Return integer

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
  return splitRomanArr.reduce(
    (integer, currRomanVal) => integer + romanIntergerObj[currRomanVal],
    0
  );
};

// Problem link: https://leetcode.com/problems/roman-to-integer/

// yet to Solve
