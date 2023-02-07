// Given: two strings are given
// Return: the array of characters from the first string which does not match the second string, and return the unique characters

// convert the first string into an array => str.split("")
// use filter method on the array of string
// inside filter, check if the character from the array of string does not match the character of the second string
// filter will return the array of characters which does not match the charater from the second string
// using Set method, we can get the unique values from an array
// return the array which we got from SET method.

function findBrokenKeys(str1, str2) {
  const str1Arr = str1.split("");
  const brokenKeys = str1Arr.filter((ch, i) => ch !== str2[i]);
  const uniqueBrokenKeys = [...new Set(brokenKeys)];
  return uniqueBrokenKeys;
}

// Problem link: https://edabit.com/challenge/pbK3wzLDvdwfEKgMt

// UPDATE
function findBrokenKeys(correctPhrase, actualTyped) {
  const correctPhraseChars = correctPhrase.split("");
  const incorrectChars = correctPhraseChars.filter(
    (ch, i) => ch !== actualTyped[i]
  );
  const uniqueIncorrectChars = [...new Set(incorrectChars)];
  return uniqueIncorrectChars;
}
