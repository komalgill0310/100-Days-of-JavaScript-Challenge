// Input: an array capitalized alphabats string characters

// Output:
// 1. Return a character from an array which appears more than array'length / 2 times
// 2. if there is no majority vote OR array is empty => Return null

// Breakdown:
// 1. Use filter on a given array in order to find duplicateValues and then use sort to group together all the unique Duplicate values and store it in a variable called "duplicateVoteArr"
// 2. Create an empty array in order to store all the unique duplicate values Arr and store it in a variable called "duplicateSubVoteArr"
// 3. Use for loop to loop through the duplicateVoteArr
// ==> Parameters: i = 0; i < duplicateVoteArr.length; i++
// Inside for loop:
// =====> 1. create a variable called "vote" to store the current value of  the array
// =====> 2. Create a variable called "voteFirstIndex" in order to store the current index of the variable called "vote"
// =====> 3. Create a variable called "voteLastIndex" in order to store the last index of the variable called "vote"
// =====> 4. Use if condition to check vote === duplicateVoteArr.slice(voteLastIndex)[0]
// ===========> 1. Slice all the votes from their firstIndex till their last index and store it a variable called "uniqueEleArr"
// REMEMBER: Add 1 to the last index of vote in order to include the last elements
// ============> 2. Puse uniqueEleArr to duplicateSubVoteArr
// =====> 5. Update the iterator i's value to last Index of the current array's vote element

// 4. Check if array's length === 1 => Return arr's element at 0 index
// 5. Use filter on duplicateSubVoteArr and check if current childVoteArr's length > (given Array's length / 2) and store it in a variable called "voteArr"
// 6. Check if original array's length === 0 || voteArr.length === 0
// ===> Return null
// 7. return childArr's value at index 0

function majorityVote(arr) {
  const duplicateVoteArr = arr
    .filter((vote) => arr.indexOf(vote) != arr.lastIndexOf(vote))
    .sort();
  let duplicateSubVoteArr = [];
  for (let i = 0; i < duplicateVoteArr.length; i++) {
    const vote = duplicateVoteArr[i];
    const voteFirstIndex = duplicateVoteArr.indexOf(vote);
    const voteLastIndex = duplicateVoteArr.lastIndexOf(vote);
    if (vote === duplicateVoteArr.slice(voteLastIndex)[0]) {
      const uniqueEleArr = duplicateVoteArr.slice(
        voteFirstIndex,
        voteLastIndex + 1
      );
      duplicateSubVoteArr.push(uniqueEleArr);
    }
    i = duplicateVoteArr.lastIndexOf(duplicateVoteArr[i]);
  }
  if (arr.length === 1) return arr[0];
  const voteArr = duplicateSubVoteArr.filter(
    (childVoteArr) => childVoteArr.length > arr.length / 2
  );
  if (arr.length === 0 || voteArr.length === 0) return null;
  return voteArr[0][0];
}

// Problem link: https://edabit.com/challenge/aewSLr2r2LMSDhPxf
