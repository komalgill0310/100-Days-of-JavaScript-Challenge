// Input:
// 1. Given a number till which I have to originate the number from zero
// 2. A string which tells in which direction to start matrix from

// Output:
// 1. Return a 2D array
// => Length of 2D array would be equal to the given number
// => Length of each child array would also be equal to the given number
// 2. Fill the first child Array from zero till given number and fill it according the given direction
// ==> Rest of the child Array's value will be an increment to each of the child's array value and in the same direction.

// NOTE:
// 1. First find out the direction
// => If direction is "ul"
// ==> it means fill the array from Upper Left,
// ====> 1. Start filling the sub array from index 0 till the length is not equal to given number
// 2. If Direction is "ur"
// ==> fill the array from upper right,
// ====> 1. Start filling the sub array from backwards, meaning from index = array.length - 1 till index === 0
// 3. If Direction is "ll"
// ==> fill the array from lower left,
// ====> 1. Start filling the very last sub array from index 0 till the length is not equal to given number.
// 4. If Direction is "lr"
// ==> fill the array from lower right,
// ====> 1. Start Filling the array from backwards but from the vary last sub array

// Similarity:
// 1. If direction is ul or ll
// => Both will be filled from index 0 till the length is not equal to the given number
// Difference: if Upper Left: start from index 0 of parent array
// ==========> if Lower Left: Start from the very last child of parent array, move upwards => REVERSE OF UPPER LEFT

// 2. If direction is ur or lr
// => Both will be filled from index = subArray.length - 1 till index = 0(FILLED BACKWARDS)
// Difference: if Upper Right: start from index 0 of parent array
// ==========> if Lower Right: Start from the very last child of parent array, move upwards

// Breakdown:
// 1. Create a variable called "diagonalArr" and store an empty array in it.
// => let diagonalArr = []
// DIRECTION: UPPER LEFT
// 2. Loop through the diagonalArr using For loop
// => Parameters: i = 0; i < n ; i++
// ==> Inside For Loop:
// =====> 1. Create an empty array and store it a variable called "childArr"
// ===========> let childArr = []
// =====> 2. Use nested for loop (Using this loop, I will fill the child Array)
// => Parameters: j = 0; j < n; j++
// Logic: childArr.push(i + J)
// 3. After nested Loop has finished, push the childArr into diagonal Array
// => diagonalArr.push(childArr)
// 4. Then, the parent loop will continue...

// UPDATE: Solve using Array.from method(will create the array in way that if the direction is upper left)
// 1. Use Array.from to create an array of n length
// 2. Use nested Array.from for each of the array element from step#1, and create an array of n length
// 3. Each value of nested array would be = i + j
// Store the result in a variable called "diagonalArr" from Step1, Step2 and Step3

// 1. If dir is lower left
// => reverse the diagonalArr
// 2. If direction is upper right
// => 1. Use for each loop to loop through each of the child of diagonal Arr and then reverse each of the element of the child
// => 2. return the updated diagonalArr
// 3. If direction is lower right
// => 1. First reverse all of the child elements using for each(see step#2)
// => 2. use reverse on update diagonalArr
// => 3. return diagonalArr

function diagonalize(n, dir) {
  let diagonalArr = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => i + j)
  );
  if (dir === "ul") {
    return diagonalArr;
  }
  if (dir === "ll") {
    return diagonalArr.reverse();
  }
  if (dir === "ur") {
    diagonalArr.forEach((childArr) => childArr.reverse());
    return diagonalArr;
  }
  if (dir === "lr") {
    diagonalArr.forEach((childArr) => childArr.reverse());
    return diagonalArr.reverse();
  }
}
