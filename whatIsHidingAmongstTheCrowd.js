// Breakdown:
// 1. Create an empty string and store it in a variable called "hiddenWord"
// 2. Loop over the given string
// ==> 1. check if the current word is not an uppercase letter
// ====> 1. hiddenWord += character at the current index
// 3. return hiddenWord

function detectWord(str) {
  let hiddenWord = "";
  for (let ch of str) {
    if (ch.charCodeAt(0) > 96 && ch.charCodeAt(0) < 123) {
      hiddenWord += ch;
    }
  }
  return hiddenWord;
}

// Problem link: https://edabit.com/challenge/rvsvGvqZ3BzNieKqA
