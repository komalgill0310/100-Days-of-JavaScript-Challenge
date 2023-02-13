// Given: Two arrays of integers are given
// Return: Find common elements which are in both arrays and return those elements in an array.

// BREAKDOWN:
// 1. use filter method on array1 and store the result in a variable called "commonElementsArr"
// PARAMETERS: current number => num
// ==> Inside filter check if array2 includes the current number

// 2. return commonElementsArr

// EDGE CASE: if any of the array has duplicates elements, then return array should only include unique elements.
// 1. use Set on commonElementsArr in order to get rid of the duplicates
//2. Use Spread Operator on a set object in order to convert the object into an array and perform this operation inside "[]" brackets so the output we get will be in form of an array.
// => return [...new Set(commonElementsArr)]

// EDGE CASE: If either of the array is empty then return an empty array.
// 1. Check if either arr1.length is falsy or arr2.length then return an []

function commonElements(arr1, arr2) {
  if (!arr1.length || !arr2.length) return [];
  const commonElementsArr = arr1.filter((num) => arr2.includes(num));
  return [...new Set(commonElementsArr)];
}
