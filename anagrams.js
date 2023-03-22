// Problem: Given two strings, write a function to determine if
// the second string is an anagram of the first. An anagram is a word,
// phrase, or name formed by rearranging the letters of another, such as
// cinema, formed from iceman.

// => if the length of two strings are not equal then return false
// 1. Create an empty object called "freqCounter1"
// 2. Create an empty object called "freqCounter2"
// 3. Use a for of loop to loop through the str1
// ==> check if the current character exists in the object -> then increment the value
// ==> else -> add that character as an object key inside the object and set its value to freqCounter1
// 4. Use a for of loop to loop through the str2
// // ==> check if the current character exists in the object -> then increment the value
// ==> else -> add that character as an object key inside the object and set its value to freqCounter1
// 5. Use another for loop and check if the key at freqCounter1 and freqCounter2 does not have same value
// ==> return false
// 6. otherwise return true

function validAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  const freqCounter1 = {};
  const freqCounter2 = {};

  for (let ch of str1.toLowerCase()) {
    freqCounter1[ch] = (freqCounter1[ch] || 0) + 1;
  }
  for (let ch of str2.toLowerCase()) {
    freqCounter2[ch] = (freqCounter2[ch] || 0) + 1;
  }

  for (let key in freqCounter2) {
    if (freqCounter1[key] != freqCounter2[key]) {
      return false;
    }
  }
  return true;
}

validAnagram("cinema", "Iceman"); //true
validAnagram("rat", "car"); //false
validAnagram("awesome", "awesom"); //false
