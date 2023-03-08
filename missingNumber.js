// High level Overview:
// 1. Find the number from the array which is missing from 0 and n.

// Steps:
// 1. Check if array's length number is not included in the array
// ==> return array's length value
// 2. else
// ==> 1. Create a variable called numberMissing
// ==> 2. Use forEach to map through the given array.slice(1)
// ======> 1. Check if num - originalArray[i] != 1
// ======> numberMissing = num - 1
// ==> 3. REturn numberMissing

var missingNumber = function (nums) {
  if (!nums.includes(nums.length)) {
    return nums.length;
  } else {
    let numberMissing = 0;
    nums.sort((a, b) => a - b);
    nums.slice(1).forEach((num, i) => {
      if (num - nums[i] != 1) {
        numberMissing = num - 1;
      }
    });
    return numberMissing;
  }
};

// how to break out of the loop early?
// 1. Create a boolean variable called foundMissing and set its value to false
// 2. Inside If condition of forEach loop, check if foundMissing is false
// 3. Perform the if condition, inside if, udpate the foundMissing to true
// 4. return true

var missingNumber = function (nums) {
  if (!nums.includes(nums.length)) {
    return nums.length;
  } else {
    let numberMissing = 0;
    let foundMissing = false;
    nums.sort((a, b) => a - b);
    nums.slice(1).forEach((num, i) => {
      if (num - nums[i] != 1 && !foundMissing) {
        numberMissing = num - 1;
        foundMissing = true;
        return;
      }
    });
    return numberMissing;
  }
};

// Problem link: https://leetcode.com/problems/missing-number/
