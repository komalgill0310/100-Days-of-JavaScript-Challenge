// Breakdown:
// 1. Create an array called altitudes and store [0]
// 2. Use map to loop over the given array
// ==> 1. For each value
// =========> 1. altitudes[i+1] = altitudes[i] + current value of the array
// 3. Use Math.max on the altitudes array to find and return the maximum number

var largestAltitude = function (gain) {
  const altitudes = [0];
  gain.map((netGain, i) => {
    altitudes[i + 1] = altitudes[i] + netGain;
    return altitudes;
  });
  return Math.max(...altitudes);
};

// Problem link: https://leetcode.com/problems/find-the-highest-altitude/
