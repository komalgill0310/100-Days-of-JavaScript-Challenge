// Breakdown: this problem can be solved using frequency counter
// 1. create an empty object called numOfLetters
// 2. create a variable called lowerCaseText and store the output of the given string converted to a lowercase
// 3. loop through the given string
// 4. Convert the current character into lowercase and then check if the character code for the current character is between the small letter alphabats
// ==> 1. check if the object called "numOfLetters" has this character
// =====> 1. if it does, then increment the value of the key by 1
// ==> 2. else
// =====> 1. Create an object property with the current character and set it's value to 1

// PUZZLE PIECES
// 1. How to sort the keys-values inside an object
// 2. How to return the output without object's parenthesis?

// Puzzle piece 1
// Tools =>
// 1. sort method to sort an array
//Question: can sort be used on objects
//Easiet way:
// Use the sort method on a string rather than on the array.
// 1. Use split method to convert the string into an array
// 2. use sort method to sort the string alphabatically
// 3. use join to convert the sorted array into a string again

// Puzzle Piece 2
// Question: How to convert the object into string
// 1.Create an empty String called countNumOfLetters
// 2. use for of loop to loop through an object
// 3. for each iteration of loop, add the key-value pair of an object property in a string variable in the format of key: value

// Puzzle piece 3: How to remove white space from the end of the string
// 1. Using trimEnd()

function charCount(text) {
  const numOfLetters = {};
  const lowerCaseSortedText = text.toLowerCase().split("").sort().join("");
  for (let i = 0; i < lowerCaseSortedText.length; i++) {
    const charCode = lowerCaseSortedText.charCodeAt(i);
    const ch = lowerCaseSortedText[i];
    if (charCode > 96 && charCode < 123) {
      if (numOfLetters.hasOwnProperty(ch)) {
        numOfLetters[ch] = numOfLetters[ch] + 1;
      } else {
        numOfLetters[ch] = 1;
      }
    }
  }
  let strNumOfLetters = "";
  for (const [key, value] of Object.entries(numOfLetters)) {
    strNumOfLetters += `${key}:${value} `;
  }
  return strNumOfLetters.trimEnd();
}

// Problem link: https://edabit.com/challenge/xZapQmtZz4Eu5Zjqs
