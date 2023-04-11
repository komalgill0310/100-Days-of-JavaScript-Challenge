// Breakdown:
// PART1 => FIND THE PAIRS AND PUSH THEM INTO AN ARRAY✅
// 1. Create an empty array called targetPairs
// 1. Loop through a given array using for loop
// 2. Create a variable called diff and subtract current value of the loop and the given num
// 3. Check if the diff is included in the given array
// ==> 1.  push [diff, current value of the arr] to the targetPairs
// ==> 2. Find the index of the diff
// ==> 3. Delete diff and current value from the array
// ==> 4. Set i = -1

// PART2 => SORT THE ELEMENTS INSIDE SUB ARRAY OF targetPairs as in the [smaller,larger]✅
// 1. Use map method to loop through the sub array of target pair and store the output in a variable called sortedSubTargetPairs
// ===> 1. for each subArray, use sort method and sort them in ascending order.
// 2. Console log the output to check if it is correct

// PART3 => SORT THE EACH PAIR IN DESCENDING ORDER ITSELF✅
// 1. use sort on the sortedSubTargetPairs where the first parameter will be the first sub array and second will be the second subArray
// 2. sort those array using their first element
// 3. return the output from the sort method

function allPairs(arr, target) {
  const targetPairs = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const diff = target - arr[i];
    arr.splice(i, 1);
    if (arr.includes(diff)) {
      targetPairs.push([num, diff]);
      const indexOfDiff = arr.indexOf(diff);
      arr.splice(indexOfDiff, 1);
      i = -1;
    }
  }
  const sortedSubTargetPairs = targetPairs.map((pair) => {
    return pair.sort((a, b) => a - b);
  });

  return sortedSubTargetPairs.sort((a, b) => a[0] - b[0]);
}

// Problem link: https://edabit.com/challenge/KYeCAfYxsvomapQg2
