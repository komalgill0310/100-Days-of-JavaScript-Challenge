//Breakdown:
// 1. Create a variable called countConsistentStr = 0
// 2. Loop through a words array
// ====> 1. Split the current word and store it into a variable called wordArr
// ====> 2. Use every Array's method on wordArr and check if any of the ch in word array is not included in the allowed string
// ========> 1. Then go to next word of the words array
// ====> 3. if the condition satisfies
// ========> 1. increment countConsistentStr by 1
// 3. return countConsistentStr

var countConsistentStrings = function (allowed, words) {
  let countConsistentStr = 0;
  for (const word of words) {
    const wordArr = word.split("");
    const isConsistent = wordArr.every((ch) => allowed.includes(ch));
    isConsistent && countConsistentStr++;
  }
  return countConsistentStr;
};

// Problem link: https://leetcode.com/problems/count-the-number-of-consistent-strings/
