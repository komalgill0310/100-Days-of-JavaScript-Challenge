// Given: an integer is given
// Return: a multiplication of n number and till n times

// HIGH LEVEL OVERVIEW:
// 1. A Number is given
// 2. Create an array whose length will be equal to given number
//  => meaning: Parent array will have given number of sub array
// => length of each sub array would be equal to given number
// 3. first sub array will fill its number of 1's table
// 4. and the rest of the sub array will increment 1 until last sub array's first element is equal to given element.
// REST OF THE ELEMENT IN EACH SUB ARRAY WOULD BE multiple of the number at position one in each sub array.

// BREAKDOWN:
// NOTE: IN ORDER TO AVOID THE UPDATE OF EACH SUB-ARRAY EACH TIME, FILL THE SUB-ARRAY WITH 0 AND THEN UPDATE THE SUBARRAY.
// For Example: n = 3
// 1. const table = Array(3).fill().map(() => Array(3).fill(0))
// EXPECTED: [[],[],[]]
// 2. Question: HOW TO FILL THE ARRAY SO I GET THE DESIRED OUTPUT?
// => 1. Loop through the array using for loop
// => PARAMETERS: i = 0; i < table.length; i++
// 2. Use Nested loop to loop through the childArr
// => PARAMETERS: j = 0; j < table.length; j++
// 3. HOW TO FILL THE SUB-ARRAY IN A WAY THAT IT MAKES MULTIPLICATION TABLE?
// => 1. Inside nested loop
//  => table[i][j] = (i+1) * (j+1)
//ONCE THE LOOPS HAVE FINISHED
// 4. Return table from the function

function multiplicationTable(n) {
  const table = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table.length; j++) {
      table[i][j] = (i + 1) * (j + 1);
    }
  }
  return table;
}

// MORE DESCRIPTIVE NAME FOR THE TABLE VARIABLE COULD BE: multiplicationGrid
