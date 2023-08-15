var isAnagram = function (s, t) {
  if (!Array.from(s).every((ch) => t.includes(ch))) return false;
  const sFreq = calculateStringCharacterFreq(s);
  const tFreq = calculateStringCharacterFreq(t);
  for (const key in tFreq) {
    if (sFreq[key] != tFreq[key]) {
      return false;
    }
  }
  return true;
};

function calculateStringCharacterFreq(str) {
  const freq = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in freq) {
      freq[str[i]] += 1;
    } else {
      freq[str[i]] = 1;
    }
  }
  return freq;
}

// Problem link: https://leetcode.com/problems/valid-anagram/description/
