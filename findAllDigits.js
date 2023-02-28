// Input: an array of 4 digit number

// Output:
// 1. Find digits from 0 till 9 from the four digits numbers
// 2. When all digits have found, return the last number from where the last digit was found.

// Notes:
// 1. When looking for a digit, exclude the duplicate digit

// Breakdown:
// 1. Create an empty array called "digitsBetween0and9"
// 2. Loop through an array on each 4-digit number, convert each digit into String and then use split method to split each digit, and lastly use Set on each split String digit to get unique string numbers.
// ====> 1. First check if digitsBetween0and9.length < 11 and if digitsBetween0and9 array does not includes any of the current digits
// // Before concat, check if digitsBetween0and9 includes any of the digits which we are about to add in the digitsBetween0and9
// HOW TO?
// 1. if(digitsBetween0and9.length > 1 and digitsBetween0and9.length < 11)
// ==> 1. loop through stringUniqueDigits and check if digitsBetween0and9 includes any of the stringUniqueDigits
// ==> 2. break;
// 2. else
// digitsBetween0and9 = digitsBetween0and9.concat(stringUniqueDigits).sort();
// =========> 1. Concat current string digit into digitsBetween0and9
// ====> 2. else
// =========> return current value in loop

function findAllDigits(nums) {
  let digitsBetween0and9 = [];
  for (let i = 0; i < nums.length; i++) {
    const stringUniqueDigits = [...new Set(String(nums[i]).split(""))];
    if (digitsBetween0and9.length < 11) {
      if (digitsBetween0and9.length > 1) {
        for (const strNum of stringUniqueDigits) {
          // if (digitsBetween0and9.includes(strNum)) {
          //   break;
          // } else {
          //   digitsBetween0and9.push(strNum);
          // }
          if (!digitsBetween0and9.includes(strNum)) {
            digitsBetween0and9.push(strNum);
          }
        }
        console.log(digitsBetween0and9);
      }
      if (digitsBetween0and9.length < 1) {
        digitsBetween0and9 = digitsBetween0and9.concat(stringUniqueDigits);
        console.log("less than 1: ", digitsBetween0and9);
      }
      if (digitsBetween0and9.length === 10) {
        console.log("length is 10: ", nums[i]);
        return nums[i];
      }
    }
    if (digitsBetween0and9.length < 11) {
      return "Missing digits!";
    }
  }
}

// YET TO SOLVE => GETTING "missing digits for all"

// Problem link: https://edabit.com/challenge/5hsyLC2Ntgoqn2wAy
