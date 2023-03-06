// Steps:
// 1. Flat the array
// 2. Sort the array as in numbers first and then letters second
// =====> 1. Create an array only for numbers
// =====> 2. Create an array only for alphabats
// =====> 3. Create an array called numThenCharSortArr in order to store the final sorted nested array output
// =====> 3. Loop through flatArr and check if value is number => push it into number array
// ===========> 1. IF value is alphabat, push it into alphabats array.
// ======> 4. Create an array called sortednumbersAlphabatsArr and add sorted numbersArr and alphabatsArr using spread operator
// 3. Create nested array from sortednumbersAlphabatsArr according to the length of the original nested array.
// 4. Create a variable called indexOfSortedNumbersAlphabatsArr which will store the index of sortedNumbersAlphabatsArr.
// 5. Create another variable called sliceSortedArr which will store the sliced arr from sortedNumbersAlphabatsArr
// =====> 1. Loop through an original array.
// =========> 1. Get the length of an array and store it in a variable called arrLength
// =========> 2. If i is 0
// ============> 1. indexOfSortedNumbersAlphabatsArr = i
// =========> 3. Slice the sortedNumbersAlphabatsArr from index indexOfSortedNumbersAlpha till indexOfSortedNumbersAlpha + arrLength and store it in a variable called "sliceSortedArr"
// =========> 4. push sliceSortedArr into numThenCharSortArr
// =========> 5. Update the index of indexOfSortedNumbersAlphabatsArr by adding the current arrLength in it.
// 6. Return numThenCharSortArr

function numThenChar(arr) {
  const flatArr = arr.flat(Infinity);
  const numbersArr = [];
  const alphabatsArr = [];
  const numThenCharSortArr = [];
  let indexOfSortedNumbersAlphabatsArr = 0;
  let sliceSortedArr;
  for (const value of flatArr) {
    typeof value === "string"
      ? alphabatsArr.push(value)
      : numbersArr.push(value);
  }
  const sortedNumbersAlphabatsArr = [
    ...numbersArr.sort((a, b) => a - b),
    ...alphabatsArr.sort(),
  ];

  for (let i = 0; i < arr.length; i++) {
    const arrLength = arr[i].length;
    if (i === 0) {
      indexOfSortedNumbersAlphabatsArr = i;
    }
    sliceSortedArr = sortedNumbersAlphabatsArr.slice(
      indexOfSortedNumbersAlphabatsArr,
      indexOfSortedNumbersAlphabatsArr + arrLength
    );
    numThenCharSortArr.push(sliceSortedArr);
    indexOfSortedNumbersAlphabatsArr += arrLength;
  }
  return numThenCharSortArr;
}

// Updated version:

function numThenChar(arr) {
  const flatArr = arr.flat(Infinity);
  const numbersArr = flatArr.filter((value) => typeof value === "number");
  const alphabatsArr = flatArr.filter((value) => typeof value === "string");
  const sortedArr = [
    ...numbersArr.sort((a, b) => a - b),
    ...alphabatsArr.sort(),
  ];
  let index = 0;
  return arr.map((subArr) => {
    const sortedSubArr = sortedArr.slice(index, index + subArr.length);
    index += subArr.length;
    return sortedSubArr;
  });
}

// Problem link: https://edabit.com/challenge/wkD5ChYH9ukyNSmZm
