// Breakdown:
// 1. Use flatMap to loop over the give array and store it in a variable called seperateDigitArr
// ==> 1. Split the each number
// 2. use map on each seperateDigitArr to convert each string digit into number
// 3. return the output from step#2

var separateDigits = function (nums) {
  const seperateDigitArr = nums.flatMap((num) =>
    String(num)
      .split("")
      .map((strNum) => parseInt(strNum))
  );
  return seperateDigitArr;
};

// Problem link: https://leetcode.com/problems/separate-the-digits-in-an-array/
