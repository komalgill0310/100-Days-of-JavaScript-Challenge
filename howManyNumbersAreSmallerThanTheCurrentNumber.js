// Breakdown:
// 1. Create an empty array called countOfSmallNumForEachNum
// 2. Loop over the given array
// ===> 1. Store the current value in a variable called currNum
// ===> 2. Use filter on the given array and check if each value is less than the currNum and store it in a variable called smallNumThanCurrNum
// ===> 3. use ternary operator to check if the length of the smallNumThanCurrNum is truthy ? smallNumThanCurrNum.length : 0 and store the output in a variable called countOfSmallerNumbers
// ===> 4. push countOfSmallerNumbers into countOfSmallNumForEachNum
// 3. return countOfSmallNumForEachNum

var smallerNumbersThanCurrent = function (nums) {
  const countOfSmallNumForEachNum = [];
  for (const num of nums) {
    const smallNumThanCurrNum = nums.filter((currentNum) => currentNum < num);
    const countOfSmallerNumbers = smallNumThanCurrNum.length
      ? smallNumThanCurrNum.length
      : 0;
    countOfSmallNumForEachNum.push(countOfSmallerNumbers);
  }
  return countOfSmallNumForEachNum;
};

// Problem link: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
