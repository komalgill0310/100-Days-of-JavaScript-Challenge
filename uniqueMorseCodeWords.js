// Breakdown:
// 1. Create a variable called uniqueWords = 0
// 2. Store the given morseCodes into an array called morseCodes
// 3. Use map to loop over the words array
// ====> 1. Split each word and use map on splitted word,
// =============> 1. Find the index of each Character => characterCode of each character - character code of a
// ============> 2. Get the current character's morseCode value from morseCodes[index of current character], and store it into a variable called moreCodeValue
// ============> 3. return morseCodeValue

// PART TWO: FIND WHICH VALUES ARE DIFFERENT?
// 1. Check for each value, if it does not includes in the rest of the array except the current value
// 2. if it does not => uniqueWords++

var uniqueMorseRepresentations = function (words) {
  const morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let uniqueCodes = 0;
  const transformedArr = words.map((word) => {
    return word
      .split("")
      .map((ch) => {
        let morseCodeValue = "";
        morseCodeValue += morseCode[ch.charCodeAt(0) - 97];
        return morseCodeValue;
      })
      .join("");
  });
  console.log(transformedArr);
  if (transformedArr.length === 1) return 1;

  for (let i = 0; i < transformedArr.length; i++) {
    if (transformedArr.slice(i + 1).includes(transformedArr[i])) {
      uniqueCodes++;
    }
  }
  return uniqueCodes;
};

// Problem link: https://leetcode.com/problems/unique-morse-code-words/
