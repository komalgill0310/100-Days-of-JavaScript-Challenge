//Problem: Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.
//e.g.: 1 + 2 + 3 + ... + 10 = 55

// Breakdown =>
// 1. create a variable to store the sum
// 2. each time we will reduce the given parameter
// 3. use while loop => Condition: Keep going until the argument is >= 1
// 4. When condition is FALSE, return the value of variable sum.

function addUpTo(n) {
  let sum = 0;
  while (n >= 1) {
    sum = sum + n;
    n--;
  }
  return sum;
}

//Problem link: https://edabit.com/challenge/ygF4FR7ah2Bn9CNoz
