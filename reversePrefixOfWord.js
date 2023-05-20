var reversePrefix = function (word, ch) {
  const indexOfCh = word.indexOf(ch);
  if (indexOfCh === -1) return word;
  const reverseStr = word
    .slice(0, indexOfCh + 1)
    .split("")
    .reverse()
    .join("");
  return reverseStr + word.slice(indexOfCh + 1);
};

// Problem link: https://leetcode.com/problems/reverse-prefix-of-word/
