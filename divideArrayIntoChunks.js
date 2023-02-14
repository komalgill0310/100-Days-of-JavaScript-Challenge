// Input:
//  => 1. array of integers
//  => 2. Size of each SubArray

// Output:
// => 1. Break the given array into sub Array whose length would be equal to given size

//Breakdown:
// NOTE: splice returns an array and modifies the original array
// 1. Create a variable called "chunksArr" and assign a value of empty array.
// => let chunksArr = []
// 2. Use For loop to loop through an array
// => PARAMETERS: i = 0; i < arr.length; i--
// ==> HOW TO CREATE SUB ARRAY WHOSE LENGTH WOULD BE EQUAL TO SIZE?
// TOOL: SPLICE METHOD
// Question: Why I use i-- instead of i++
// Answer: Because, when I use splice method in the logic, it will udpate the original array.
// BREAKDOWN:
// 1. Use splice method to get the elements from an array, by using index and the given size
// 2. increment the index
// 3. Use IF condition to check if original array's length is empty, then break out of the loop.
// 4. Return chunksArr

function chunkify(arr, size) {
  const chunksArr = [];
  for (let i = 0; i < arr.length; i--) {
    chunksArr.push(arr.splice(i, size));
    i++;
    if (!arr.length) {
      break;
    }
  }
  return chunksArr;
}

// ABOVE LOGIC WILL CAUSE AN INFINITE LOOP.

// In order to fix this, parameters of for loop should be:
// PARAMETERS: i = 0; i < arr.length; i = i + size
// Rather than modifying the original array, use slice method.

// UPDATED CODE WOULD BE:

function chunkify(arr, size) {
  const chunksArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunksArr.push(arr.slice(i, i + size));
  }
  return chunksArr;
}
