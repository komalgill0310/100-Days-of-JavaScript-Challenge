// Steps:
// 1. Flat the array
// 2. Sort the array as in numbers first and then letters second
// =====> 1. Create an array only for numbers
// =====> 2. Create an array only for alphabats
// =====> 3. Loop through flatArr and check if value is number => push it into number array
// ===========> 1. IF value is alphabat, push it into alphabats array.
// ======> 4. Create an array called numberAlphabatsArr and push number and alphabats Array
// ======> 5. Loop through numberAlphabatsArr and then sort each nested array using sort method in ascending order
// ======> 6. Use flat method flatten out the numberAlphabatsArr
// 3. Create nested array based on the length of the original nested array in the given array.

function numThenChar(arr) {
  const flatArr = arr.flat(Infinity);
  const numbersArr = [];
  const alphabatsArr = [];
  for (let value in flatArr) {
    if (typeof value === "string") {
      alphabatsArr.push(value);
    } else {
      numbersArr.push(value);
    }
  }
  const numbersAlphabatsArr = [].push(...numbersArr, ...alphabatsArr);
  console.log(numbersAlphabatsArr);
}

// YET TO SOLVE

// Problem link: https://edabit.com/challenge/wkD5ChYH9ukyNSmZm
