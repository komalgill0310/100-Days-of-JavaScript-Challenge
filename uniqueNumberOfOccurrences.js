// Breakdown:
// HIGH LEVEL OVERVIEW: Count the number of times each number appear in an array, then check if the freq for all is unique.

// STEP BY STEP:
// 1. Create an empty object called freq
// 2. Use for loop to loop over the given arr.
// ===> Parameter: i = 0; i < arr.length; i++
// ======> 1. Check if value exist in an object
// ============> increment the value of the key of an object.
// ======> 2. else
// ============> freq[arr[i]] = 1
// 3. Use Object.values to get the values from freq and store it an array called occurencesOfNums
// 4. Use every on occurencesOfNums to check if first index of element === lastIndex of element

var uniqueOccurrences = function (arr) {
  const freq = {};
  for (let num of arr) {
    if (freq.hasOwnProperty(num)) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }
  const occurencesOfNums = Object.values(freq);
  console.log(occurencesOfNums);
  return occurencesOfNums.every(
    (num) => occurencesOfNums.indexOf(num) === occurencesOfNums.lastIndexOf(num)
  );
};

// Problem link: https://leetcode.com/problems/unique-number-of-occurrences/
