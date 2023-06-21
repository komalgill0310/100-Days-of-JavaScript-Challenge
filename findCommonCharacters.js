var commonChars = function (words) {
  const commonChar = [];
  const firstWord = words[0];

  for (let i = 0; i < firstWord.length; i++) {
    const char = firstWord[i];
    if (words.every((word) => word.includes(char))) {
      commonChar.push(char);
      words = words.map((word) => word.replace(char, ""));
    }
  }

  return commonChar;
};

// Problem link: https://leetcode.com/problems/find-common-characters/
