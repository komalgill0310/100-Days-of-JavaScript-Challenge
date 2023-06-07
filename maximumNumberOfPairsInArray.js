var numberOfPairs = function (nums) {
  const freq = {};
  for (let num of nums) {
    if (Object.hasOwn(freq, num)) {
      freq[num] += 1;
    } else {
      freq[num] = 1;
    }
  }
  const answer = Array(2).fill(0);
  const freqValues = Object.values(freq);
  freqValues.map((value) => {
    if (value % 2 === 0) {
      answer[0] += value / 2;
    } else {
      if (value > 2) {
        answer[0] += (value - 1) / 2;
      }
      answer[1] += 1;
    }
  });
  return answer;
};

// Problem link: https://leetcode.com/problems/maximum-number-of-pairs-in-array/
