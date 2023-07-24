var stringMatching = function (words) {
  words.sort((a, b) => a.length - b.length);
  console.log(words);
  const matchingStrArr = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].includes(word)) {
        matchingStrArr.push(word);
        break;
      }
    }
  }
  return matchingStrArr;
};

// Problem link: https://leetcode.com/problems/string-matching-in-an-array/description/
