// Given: an array is given
// Return: array's length should be => given array's length - 1

// NOTES:
// IMAGINE GIVEN ARRAY'S LENGTH = 5
// 1. If !array.length => return arr
// 2. Create an array whose length would be givenArray.length - 1 and store that array in a variable called "partitionArr"
// => const partitionArr = Array(givenArray.length - 1)
// => Output: [_,_,_,_]
// QUESTION: How to push array inside each empty slot of the partitionArr.
// ANSWER: Breakdown:
// 1. use Array.fill method to push an array in partitionArr.
// => const partitionArr = Array(givenArray.length - 1).fill([])
// 2. Use Console.log to see if the output is expected.
//  => EXPECTED OUTPUT: [[],[],[],[]]✅
// 3. Map through the partitionArr and REPLACE each subArray of the partitionArr and store the result in a variable called "insertChildOfpartitionArr"
// => const insertChildOfpartitionArr = partitionArr.map(childArr => Array(2).fill([]))
// EXPECTED OUTPUT: [[[],[]],[[],[]],[[],[]],[[],[]]]

// COMBINE ALL OF THE ABOVE STEPS
// PERFORM THE OPERATION IN partitionArr
// => HOW TO:
// 1. const partitionArr = Array(givenArray.length - 1).fill().map(() => Array(2).fill([]))
// EXPECTED OUTPUT: [[[],[]],[[],[]],[[],[]],[[],[]]]
// ACTUAL OUTPUT: [[[],[]],[[],[]],[[],[]],[[],[]]]

// NEXT PART OF THE PROBLEM: How to push given array's elements into the sub-Array so we get the desired output
// HIGH LEVEL OVERVIEW:
// => 1. loop through EACH CHILD of partitionArr
// 2. Get Access to each of the sub-child Array of child of PartitionArr
// FIRST CHILD OF PARTITIONARR
// 1. first sub-child => push first element of the array
// => second sub-child => push rest of the element
// SECONDCHILD OF PARTITIONARR
// 2. first sub-child => push first two element of the array
// => second sub-child => push rest of the element of the array
// THIRD CHILD OF THE PARTITIONARR
// 3. first sub-child => push first three element of the array
// => second sub-child => push rest of the element
// FOURTH CHILD OF THE PARTITIONARR
// 4. first sub-child => push  first four element of the array
// => second sub-child => push rest of the element

// BREAKDOWN:
// 1. Use for loop to loop through the partitionArr
// => PARAMETERS: i = 0; i < partitionArr.length; i++
// INSIDE FOR LOOP:
// => 1. partitionArr[i][j] = arr.slice(0, i+1)
// => 2. partitionArr[i][j+1] = arr.slice(i+1)

// USING FOR LOOP
function movingPartition(arr) {
  if (!arr.length) return arr;
  const partitionArr = Array(arr.length - 1)
    .fill()
    .map(() => Array(2).fill([]));
  for (let i = 0; i < partitionArr.length; i++) {
    partitionArr[i][0] = arr.slice(0, i + 1);
    partitionArr[i][1] = arr.slice(i + 1);
  }
  return partitionArr;
}

// REMEMBER, SLICE return an array.
// UPDATED VERSION OF CODE WOULD BE:

function movingPartition(arr) {
  if (!arr.length) return arr;
  const partitionArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    partitionArr.push([arr.slice(0, i + 1), arr.slice(i + 1)]);
  }
  return partitionArr;
}

//USE MAP TO SOLVE THE CHALLENGE
// 1. use Map to loop through the arr.slice(1) => in order to get element at index 0 inside map method
// PARAMETERES: _ , i
// => INSIDE MAP:
// 1. [arr.slice(0, i+1), arr.slice(i+1)]

function movingPartition(arr) {
  return arr.slice(1).map((_, i) => [arr.slice(0, i + 1), arr.slice(i + 1)]);
}
