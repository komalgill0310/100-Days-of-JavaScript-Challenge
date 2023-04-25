// Breakdown:
// 1. Create a variable called sumOfOddLengthSubArr and initialize it to 0
// 2. Use reduce to perform the addition on the given array and store it in a variable called sumOfOddLengthSubArr
// 3. if(arr's length > 2)
// ===> 1. use for loop over the given array
// ======> For each array's value, add it to the sumOfOddLengthSubArr
// ===> 2. Use another for loop to loop over the given array.
// ======> 1. Use slice method to get the sub array of length 3 and store it in a variable called subArr
// ======> 2. check if subArr.length > 2
// =========> 3. Use reduce to perform the addition of all the array elements and add it to the sumOfOddLengthSubArr
// 4. else
// ===> return sumOfOddLengthSubArr
// 5. return sumOfOddLengthSubArr

var sumOddLengthSubarrays = function (arr) {
  let sumOfOddLengthSubArr = 0;
  sumOfOddLengthSubArr = arr.reduce((acc, num) => acc + num, 0);
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      sumOfOddLengthSubArr = 0;
    }
    for (let num of arr) {
      sumOfOddLengthSubArr += num;
    }
    if (arr.length > 3) {
      for (let i = 0; i <= arr.length - 3; i++) {
        sumOfOddLengthSubArr += arr
          .slice(i, i + 3)
          .reduce((acc, num) => acc + num, 0);
      }
    }
  }
  return sumOfOddLengthSubArr;
};

// SOME TEST CASES ARE FAILING => NEED TO RETHINK THE SOLUTION

// Problem link: https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
