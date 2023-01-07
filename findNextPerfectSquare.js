//Breakdown:
//1. First find a method a to get the sqroot of a  given number => Math.sqrt(givenNumber)
//2. How to find if a given number is a perfect square.
// 2.1 In order to do that, find if the sqroot of a number is not a perfect square.
// Non perfect square number will not be an Integer.
// How to find if a number is an Integer => Number.isInteger(value) => return Boolean value
// 3. If the sqroot of a number is Integer, then
// add one to the given number and multiply that number to itself, in order to return the perfect square of a next number.
// Formula to do that: Math.pow(value, exponent)
//  if the number is not an Integer => return null

function nextSquare(n) {
  const sqRoot = Math.sqrt(n);
  return Number.isInteger(sqRoot) ? Math.pow(sqRoot + 1, 2) : null;
}

// Problem link: https://edabit.com/challenge/gcsHhjRNWjiZwiFFj
