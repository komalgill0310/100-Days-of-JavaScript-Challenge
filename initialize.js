// Output:
// Return the first character of a first word before space with a dot at the end, space in the middle and then first character of a last word with a dot at the end.

// Breakdown:
// 1. Use map on the given array and store the output ion a variable called "splitNames"
// ==> use split on the each value of the given array
// 2. Use flatMap on the output of the Step#1
// ==> 1. Use template literal on each subArray of splitNames array and return the output in the desired format with a `${first ch. of a first word} ${first ch. of a second word}`

// Puzzle Piece:
// 1. How to get access to the second word of a first character.
// => 1. split the each string with a space
// ===> this way the each string will be a string in itself.

function initialize(names) {
  const splitNames = names.map((name) => name.split(" "));
  return splitNames.flatMap(
    (splitName) => `${splitName[0][0]}. ${splitName[1][0]}.`
  );
}

// Problem link: https://edabit.com/challenge/uJewuaLAFMXGWhbgu
