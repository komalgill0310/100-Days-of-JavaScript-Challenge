// var shortestCompletingWord = function (licensePlate, words) {
//   licensePlate.toLowerCase();
//   const characterFreqInLicensePlate = {};
//   for (let i = 0; i < licensePlate.length; i++) {
//     const ch = licensePlate[i];
//     if (typeof Number(ch) != "number") {
//       if (Object.hasOwn(characterFreqInLicensePlate, ch)) {
//         characterFreqInLicensePlate[ch] += 1;
//       } else {
//         characterFreqInLicensePlate[ch] = 1;
//       }
//     }
//   }
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     const freq = {};
//     for (let j = 0; j < word.length; j++) {
//       const ch = word[j];
//       if (Object.hasOwn(freq, ch)) {
//         freq[ch] += 1;
//       } else {
//         freq[ch] = 1;
//       }
//     }
// CHECK IF EQUAL NUMBER OF KEY VALUES EXISTS IN BOTH FREQUENCY OBJECTS
//     for (const [key1, value1] of characterFreqInLicensePlate) {
//       if(!Object.hasOwn(freq,key1)){
//         freq[key1] === value1
//       }
//     }
// };

// YET TO SOLVE

// Problem link: https://leetcode.com/problems/shortest-completing-word/
