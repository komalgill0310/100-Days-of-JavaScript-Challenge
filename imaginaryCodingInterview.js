// Given: an array of numbers and the total time
// Return: either "qualified" or "disqualified"

// Breakdown:
// FIRST PART: QUALIFIED SCENARIOS
// 1. Array's length should be === 8
// 2. Given Total Time <= 120
// 3. Array's value at index 0 and 1 should be either equal to 5 or less than 5
// 4. Array's value at index 2 and 3 should be either euqal to 10 or less than 10
// 5. Array's value at index 4 and 5 should be either 15 or less than 15
// 6. Array's value at index 6 and 7 should be either 20 or less than 20

// SECOND PART: DISQUALIFIED SCENARIOS
// 1. If either none or any of the above condition fails

// HOW TO:
// 1. Use Logical AND inside IF in order to check for all of the conditions:
// => if(arr.length === 8 && totalTime <= 120 && (arr[0] <== 5 && arr[1] <== 5) && (arr[2] <== 10 && arr[3] <== 10) && (arr[4] <== 15 && arr[5] <== 15) && (arr[6] <== 20 && arr[7] <== 20)
// =====> return "qualified"
// => else
// =====> return "disqualified"

function interview(arr, tot) {
  if (
    arr.length === 8 &&
    tot <= 120 &&
    arr[0] <= 5 &&
    arr[1] <= 5 &&
    arr[2] <= 10 &&
    arr[3] <= 10 &&
    arr[4] <= 15 &&
    arr[5] <= 15 &&
    arr[6] <= 20 &&
    arr[7] <= 20
  ) {
    return "qualified";
  }
  return "disqualified";
}
