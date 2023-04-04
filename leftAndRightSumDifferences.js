// Input:
// 1. an array of n length is given

// Output:
// 1. return an array where each value is the difference of the leftSum - rightSum

// Breakdown:
// 1. if givenArray's length is 1 => return [0]
// 2. create an array called leftSum whose length would be equal to given array's length and all elements of the array would be 0
// 3. create an array called rightSum whose length would be equal to given array's length and all elements of the array would be 0
// 4. Loop through an array using for loop
// ===> 1. for LEFT SUM
// ====> leftSum[i+1] = leftSum[i] + arr[i]
// 5. lOOP THROUGH AN ARRAY USING FOR LOOP => for rightSum
// PARAMETERS: i = array.length-1; i>0;i--
// ===> 1. for RIGHT SUM
// ====> rightSum[i-1] = rightSum[i] + arr[i]
// 6. use map to loop through an array called leftSum
// ====> for each value of leftSum => Math.abs(leftSum's value - rightSum[i])
// 7. return output from map

// NOTE:
// 1. for LEFTSUM => start REPLACING elements from INDEX 11
// 2. for RIGHTSUM => start REPLACING elements from INDEX 0 TILL LEFTSUM.LENGTH - 1

var leftRigthDifference = function (nums) {
  if (nums.length === 1) return [0];
  else {
    const leftSum = Array(nums.length).fill(0);
    const rightSum = Array(nums.length).fill(0);
    // FOR LEFT SUM
    for (let i = 0; i < nums.length - 1; i++) {
      leftSum[i + 1] = leftSum[i] + nums[i];
    }
    // FOR RIGHT SUM
    for (let i = nums.length - 1; i > 0; i--) {
      rightSum[i - 1] = rightSum[i] + nums[i];
    }
    return leftSum.map((num, i) => Math.abs(num - rightSum[i]));
  }
};

//Problem link: https://leetcode.com/problems/left-and-right-sum-differences/
