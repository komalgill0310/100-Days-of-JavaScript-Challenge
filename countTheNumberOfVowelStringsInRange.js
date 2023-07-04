var vowelStrings = function (words, left, right) {
  let totalNumOfVowelStr = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = left; i <= right; i++) {
    const word = words[i];
    if (vowels.includes(word[0]) && vowels.includes(word.slice(-1))) {
      totalNumOfVowelStr++;
    }
  }
  return totalNumOfVowelStr;
};

// Problem link: https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/
