// Create a function that takes an array of integers and removes the smallest value.

// Examples:
// - removeSmallest([1, 2, 3, 4, 5] ) ➞ [2, 3, 4, 5]
// - removeSmallest([2, 2, 1, 2, 1]) ➞ [2, 2, 2, 1]

// Notes:
// Don't change the order of the left over items.
// If you get an empty array, return an empty array: [] ➞ []
// If there are multiple items with the same value, remove item with lower index (3rd example).

function removeSmallest(arr) {
  const minimumNumber = Math.min(...arr);
  return arr.filter((num, index) => index != arr.indexOf(minimumNumber));
}

//Time to Solve: 20Min
