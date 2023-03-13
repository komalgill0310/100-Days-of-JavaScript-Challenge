// Steps:
// 1. Use set to remove duplicates from array and store the resulted array in a variable called "distinctNums"
// 2. Create a variable called "maxNumCount" initialize it to 0
// 3. If distinctNums.length < 3
// ==> return maxNum from DistinctNums
// 4. else
// ===> 1. use while loop and check if maxNumCount is less than 3
// =========> 1. Create a variable called maxNum which will hold the maxNum from the array.
// =========> 2. Find the indexOf the maxNum
// =========> 3. Use splice method to remove that element from the array by using the index of the maxNum
// =========> 4. Increment maxNumCount by one
// 5. return maximum number from the array

var thirdMax = function (nums) {
  const distinctNums = [...new Set(nums)];
  let maxNumCount = 0;
  if (distinctNums.length < 3) {
    return Math.max(...distinctNums);
  } else {
    while (maxNumCount < 2) {
      const maxNum = Math.max(...distinctNums);
      const maxNumIndex = distinctNums.indexOf(maxNum);
      distinctNums.splice(maxNumIndex, 1);
      maxNumCount++;
    }
    return Math.max(...distinctNums);
  }
};

// Problem link: https://leetcode.com/problems/third-maximum-number/
