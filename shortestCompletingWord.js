// var shortestCompletingWord = function (licensePlate, words) {
//   // GET THE FREQ OF LICENSE PLATE ALPHABATS
//   const licensePlateAlphabatsFreq = {};
//   for (let i = 0; i < licensePlate.length; i++) {
//     const ch = licensePlate[i].toLowerCase();
//     if (ch != Number(ch)) {
//       if (Object.hasOwn(licensePlateAlphabatsFreq, ch)) {
//         licensePlateAlphabatsFreq[ch] += 1;
//       } else {
//         licensePlateAlphabatsFreq[ch] = 1;
//       }
//     }
//   }
//   console.log("licensePlateAlphabatsFreq: ", licensePlateAlphabatsFreq);
//   // LOOP THROUGH WORDS ARRAY TO GET THE FREQ OF EACH WORD CHARACTERS
//   words.sort((a, b) => a.length - b.length);
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     const wordFreq = {};
//     for (let j = 0; j < word.length; j++) {
//       const ch = word[j];
//       if (Object.hasOwn(wordFreq, ch)) {
//         wordFreq[ch] += 1;
//       } else {
//         wordFreq[ch] = 1;
//       }
//     }
//     // CHECK IF WORDFREQ CONTAINS ALL THE KEYS OF LICENSEPLATEALPHABATSFREQ, with the same values
//     let count = 0;
//     for (const [key, value] of Object.entries(licensePlateAlphabatsFreq)) {
//       console.log("wordFreq: ", wordFreq);
//       if (wordFreq[key] && value === wordFreq[key]) {
//         count++;
//       } else {
//         break;
//       }
//     }
//     if (count === Object.keys(licensePlateAlphabatsFreq).length) {
//       return word;
//     }
//   }
// };

// YET TO SOLVE

// Problem link: https://leetcode.com/problems/shortest-completing-word/

// var shortestCompletingWord = function (licensePlate, words) {
//   // GET THE FREQ OF LICENSE PLATE ALPHABATS
//   const licensePlateAlphabatsFreq = {};
//   for (let i = 0; i < licensePlate.length; i++) {
//     const ch = licensePlate[i].toLowerCase();
//     if (ch != Number(ch)) {
//       if (Object.hasOwn(licensePlateAlphabatsFreq, ch)) {
//         licensePlateAlphabatsFreq[ch] += 1;
//       } else {
//         licensePlateAlphabatsFreq[ch] = 1;
//       }
//     }
//   }
//   console.log("licensePlateAlphabatsFreq: ", licensePlateAlphabatsFreq);
//   // LOOP THROUGH WORDS ARRAY TO GET THE FREQ OF EACH WORD CHARACTERS
//   words.sort((a, b) => a.length - b.length);
//   const licensePlateKeys = Object.keys(licensePlateAlphabatsFreq);
//   const updateWords = words.filter((word) =>
//     licensePlateKeys.every((ch) => word.includes(ch))
//   );
//   if (updateWords.length === 1) return updateWords[0];
//   for (let i = 0; i < updateWords.length; i++) {
//     const word = updateWords[i];
//     const wordFreq = {};
//     for (let j = 0; j < word.length; j++) {
//       if (Object.hasOwn(wordFreq, word[j])) {
//         wordFreq[word[j]] += 1;
//       } else {
//         wordFreq[word[j]] = 1;
//       }
//     }
//     let count = 0;
//     for (const [key, value] of Object.entries(licensePlateAlphabatsFreq)) {
//       console.log("wordFreq; ", wordFreq);
//       if (word[key] >= value) {
//         count++;
//       }
//     }
//     if (licensePlateKeys.length === count) return word;
//   }
// };

// did not solved yet
