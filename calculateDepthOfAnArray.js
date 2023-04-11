// High level overview:
// 1. Loop through a given array
// 2. Check each value if it's an array
// 3. Call the function again and repeat these steps until the loop has finished and the the value is not an array

// Breakdown:
// 1. Create a variable called "arrDepth" and set it's value to 0
// 2. Create another function called "calculateDepth" and pass it an arguments called (arrDepth, arr)
// ==> 1. Create a variable called maxDepth and initialize its value to arrDepth
// ==> 2. Use a for...of loop to loop through a given arr
// ==> 3. Check if the current value of array is Array
// =====> 1. call the calculateDepth function with the current value of an array and the arrDepth+1 function and store the output in a variable called depth
// =====> 2. Use math.max and pass depth and maxDepth as an argument and update the value of the maxDepth by the output of Math.max
// ==> 4. return arrDepth
// 3. return calculateDepth(arr,arrDepth)

function depth(arr) {
  let arrDepth = 1;
  return calculateDepth(arr, arrDepth);
}

function calculateDepth(arr, arrDepth) {
  let maxDepth = arrDepth;
  for (const value of arr) {
    if (Array.isArray(value)) {
      const depth = calculateDepth(value, arrDepth + 1);
      maxDepth = Math.max(maxDepth, depth);
    }
  }
  return maxDepth;
}

// Problem link: https://edabit.com/challenge/JJtafXGmNegpQMp6p
